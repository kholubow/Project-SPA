import { Instance } from './../../../shared/models/Instance';
import { DataService } from './../../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../../../shared/services/alertify.service';

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

  constructor(private alertify: AlertifyService,
              private dataService: DataService) { }


  ngOnInit() {
    this.bgShowInstances = 'assets/images/BGsignin2.jpg';
    this.onGetInstances();
  }


  checkInstanceId(data) {
    this.instanceId = data;
    return this.instanceId;
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
