import { AlertifyService } from './../../../shared/services/alertify.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
backgroundImagePath: string;

  constructor(private alertify: AlertifyService) { }

  ngOnInit() {
      this.backgroundImagePath = 'assets/images/BGsignin2.jpg';
  }

  onSignIn(form: NgForm) {
      
  }

  testAlertify() {
      this.alertify.success('Zalogowales sie poprawnie');
  }

}
