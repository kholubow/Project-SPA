import { Instance } from './../../../shared/models/Instance';
import { DataService } from './../../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../../../shared/services/alertify.service';
import { AuthService } from '../../../auth/shared/services/auth.service';

@Component({
  selector: 'app-show-instances',
  templateUrl: './show-instances.component.html',
  styleUrls: ['./show-instances.component.css']
})
export class ShowInstancesComponent implements OnInit {
  bgShowInstances: string;
  instanceId: number;
  instances: Instance[];
  isCollapsed = true;
  reason: string;

  constructor(private alertify: AlertifyService,
              private dataService: DataService,
              private authService: AuthService) { }


  ngOnInit() {
    this.bgShowInstances = 'assets/images/BGsignin2.jpg';
    this.onGetInstances();
  }


  checkInstanceId(data) {
    this.instanceId = data;
    return this.instanceId;
  }


  onAcceptInstance(id: number) {
    this.dataService.onApprovalInstance(id, 'true', this.authService.decodedToken.nameid).subscribe(() => {
        this.alertify.success('Wniosek został zaakceptowany pomyślnie');
    }, error => {
        this.alertify.error('Minimalna ilość pracowników na tym samym stanowisku, którzy muszą zostać: 2');
    });
  }


  onDisapprovalInstance(id: number) {
    this.reason = window.prompt('Proszę podać powód:');
    this.dataService.onDisapprovalInstance(id, 'false', this.reason, this.authService.decodedToken.nameid).subscribe(() => {
        this.alertify.success('Wniosek został odrzucony pomyślnie');
    }, error => {
        this.alertify.error('Nie udało się odrzucić wniosku');
    });
  }


  onGetInstances() {
    this.dataService.onGetInstances().subscribe((res: Instance[]) => {
        this.instances = res;
        this.alertify.success('Dane o wnioskach zostały pobrane pomyślnie');
    }, error => {
        this.alertify.error('Nie udało się pobrać wszystkich wniosków');
    });
  }

}
