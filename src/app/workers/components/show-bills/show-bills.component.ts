import { Bill } from './../../../shared/models/Bill';
import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../../../shared/services/alertify.service';
import { DataService } from '../../../shared/services/data.service';
import { AuthService } from '../../../auth/shared/services/auth.service';

@Component({
  selector: 'app-show-bills',
  templateUrl: './show-bills.component.html',
  styleUrls: ['./show-bills.component.css']
})
export class ShowBillsComponent implements OnInit {
  bgShowInstances: string;
  billId: number;
  bills: Bill[];
  isCollapsed = true;

  constructor(private alertify: AlertifyService,
              private dataService: DataService,
              private authService: AuthService) { }


  ngOnInit() {
    this.bgShowInstances = 'assets/images/BGsignin2.jpg';
    this.onGetBills();
  }


  checkBillId(data) {
    this.billId = data;
    return this.billId;
  }

  onGetBills() {
    this.dataService.onGetBills().subscribe((res: Bill[]) => {
        this.bills = res;
        this.alertify.success('Dane o fakturach zostały pobrane pomyślnie');
    }, error => {
        this.alertify.error('Nie udało się pobrać wszystkich faktur');
    });
  }
}
