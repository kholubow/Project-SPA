import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
bgMessages: string

  constructor() { }

  ngOnInit() {
      this.bgMessages = 'assets/images/BGsignin2.jpg';
  }

}
