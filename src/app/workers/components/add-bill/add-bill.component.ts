import { Bill } from './../../../shared/models/Bill';
import { AuthService } from './../../../auth/shared/services/auth.service';
import { DataService } from './../../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';
import { AlertifyService } from './../../../shared/services/alertify.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.css']
})
export class AddBillComponent implements OnInit {
bgInstance: string;
billForm: FormGroup;
bill: Bill;


  constructor(public dataService: DataService,
              public authService: AuthService,
              private alertify: AlertifyService,
              private router: Router,
              private fb: FormBuilder) { }


  ngOnInit() {
      this.bgInstance = 'assets/images/BGsignin2.jpg';
      this.createBillForm();
  }


  createBillForm() {
      this.billForm = this.fb.group({

            PaymentMethod: ['Gotowka'],
            ServiceName: ['', Validators.required],
            Salesman: ['', Validators.required],
            Buyer: ['', Validators.required],
            Price: ['', Validators.required],
            Name: ['', Validators.required]

      });
  }

  onSendBill() {
    if (this.billForm.valid) {
        this.bill = Object.assign({}, this.billForm.value);
        this.dataService.onSendBill(this.bill, this.authService.decodedToken.nameid).subscribe(() => {
            this.alertify.success('Faktura została wysłana pomyślnie');
            this.router.navigate(['/']);
        }, error => {
            this.alertify.error('Wystąpił błąd podczas wysyłania faktury');
        });
    }
  }

}
