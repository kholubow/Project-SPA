import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-instances',
  templateUrl: './show-instances.component.html',
  styleUrls: ['./show-instances.component.css']
})
export class ShowInstancesComponent implements OnInit {
  bgShowInstances: string;

  constructor() { }

  ngOnInit() {
    this.bgShowInstances = 'assets/images/BGsignin2.jpg';
  }

}
