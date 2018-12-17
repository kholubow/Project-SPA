import { AuthService } from './../../../auth/shared/services/auth.service';
import { DataService } from './../../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';
import { AlertifyService } from './../../../shared/services/alertify.service';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Instance } from '../../../shared/models/Instance';
import { getDate } from 'ngx-bootstrap/chronos/utils/date-getters';


@Component({
  selector: 'app-instance',
  templateUrl: './instance.component.html',
  styleUrls: ['./instance.component.css']
})
export class InstanceComponent implements OnInit {
bgInstance: string;
instanceForm: FormGroup;
bsConfig: Partial<BsDatepickerConfig>;
instance: Instance;
minDate: Date;
maxDate: Date;


  constructor(public dataService: DataService,
              public authService: AuthService,
              private alertify: AlertifyService,
              private router: Router,
              private fb: FormBuilder) {

                    this.minDate = new Date();
                    this.maxDate = new Date();
                    this.minDate.setDate(this.minDate.getDate() + 0);

               }


  ngOnInit() {
      this.bgInstance = 'assets/images/BGsignin2.jpg';
      this.bsConfig = {
        containerClass: 'theme-red'
      };
      this.createInstanceForm();
  }


  createInstanceForm() {
      this.instanceForm = this.fb.group({

            instanceStart: [this.minDate, Validators.required],
            instanceEnd: [null, Validators.required],
            typeOfInstance: ['wypoczynkowy'],
            content: ['', Validators.required]

      });
  }


  changeMaxDateViaInputEvent() {
     this.maxDate = new Date();
     this.maxDate.setDate(getDate(this.instanceForm.get('instanceStart').value) + 26);
  }


  onSendInstance() {
    if (this.instanceForm.valid) {
        this.instance = Object.assign({}, this.instanceForm.value);
        this.dataService.onSendInstance(this.instance, this.authService.decodedToken.nameid).subscribe(() => {
            this.alertify.success('Wniosek został wysłany pomyślnie');
            this.router.navigate(['/']);
        }, error => {
            this.alertify.error('Wystąpił błąd podczas wysyłania wniosku');
        });
    }
  }

}
