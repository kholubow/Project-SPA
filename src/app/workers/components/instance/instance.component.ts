import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instance',
  templateUrl: './instance.component.html',
  styleUrls: ['./instance.component.css']
})
export class InstanceComponent implements OnInit {
bgInstance: string;

  constructor() { }

  ngOnInit() {
      this.bgInstance = 'assets/images/BGsignin2.jpg';
  }

}
