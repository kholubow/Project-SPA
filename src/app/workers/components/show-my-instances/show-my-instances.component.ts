import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../../../shared/services/alertify.service';
import { DataService } from '../../../shared/services/data.service';
import { AuthService } from '../../../auth/shared/services/auth.service';
import { Instance } from '../../../shared/models/Instance';

@Component({
  selector: 'app-show-my-instances',
  templateUrl: './show-my-instances.component.html',
  styleUrls: ['./show-my-instances.component.css']
})
export class ShowMyInstancesComponent implements OnInit {
  bgShowMyInstances: string;
  instances: Instance[];

  constructor(private alertify: AlertifyService,
              private dataService: DataService,
              private authService: AuthService) { }

  ngOnInit() {
    this.bgShowMyInstances = 'assets/images/BGsignin2.jpg';
    this.onGetInstances();
  }

  onGetInstances() {
    this.dataService.onGetAllInstancesForWorker(this.authService.decodedToken.nameid).subscribe((res: Instance[]) => {
        this.instances = res;
        this.alertify.success('Twoje wnioski zostały pobrane pomyślnie');
    }, error => {
        this.alertify.error('Nie udało się pobrać wszystkich wniosków');
    });
  }

}
