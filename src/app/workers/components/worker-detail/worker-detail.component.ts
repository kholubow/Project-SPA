import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worker-detail',
  templateUrl: './worker-detail.component.html',
  styleUrls: ['./worker-detail.component.css']
})
export class WorkerDetailComponent implements OnInit {
  bgWorkerDetail: string;

  constructor() { }

  ngOnInit() {
    this.bgWorkerDetail = 'assets/images/BGsignin2.jpg';
  }

}
