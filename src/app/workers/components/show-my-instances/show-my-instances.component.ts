import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-my-instances',
  templateUrl: './show-my-instances.component.html',
  styleUrls: ['./show-my-instances.component.css']
})
export class ShowMyInstancesComponent implements OnInit {
  bgShowMyInstances: string;

  constructor() { }

  ngOnInit() {
    this.bgShowMyInstances = 'assets/images/BGsignin2.jpg';
  }

}
