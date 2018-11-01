import { AuthService } from './../../shared/services/auth.service';
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

  constructor(private alertify: AlertifyService,
              private authService: AuthService) { }

  ngOnInit() {
      this.backgroundImagePath = 'assets/images/BGsignin2.jpg';
  }

  onSignIn(form: NgForm) {
    const username = form.value.username;
    const pass = form.value.pass;   

    this.authService.login(username, pass).subscribe(data => {
      this.alertify.success('Zalogowałeś się poprawnie');
    }, error => {
      this.alertify.error('Niepoprawny login/hasło');
    });

  }


}
