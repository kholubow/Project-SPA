import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
backgroundImagePath: string;

  constructor() { }

  ngOnInit() {
      this.backgroundImagePath = 'assets/images/BGsignin2.jpg';
  }

  onSignIn(form: NgForm) {

  }

}
