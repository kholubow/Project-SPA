import { User } from './../../../shared/models/User';
import { AuthService } from './../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
backgroundImagePath: string;
registerForm: FormGroup;
bsConfig: Partial<BsDatepickerConfig>;
user: User;

  constructor(public authService: AuthService,
              private router: Router,
              private fb: FormBuilder) { }

  ngOnInit() {
      this.backgroundImagePath = 'assets/images/BGsignin2.jpg';
      this.bsConfig = {
        containerClass: 'theme-red'
      };
      this.createRegisterForm();
  }

  
  createRegisterForm() {
      this.registerForm = this.fb.group({
            gender: ['male'],
            username: ['', Validators.required],
            userSurname: ['', Validators.required],
            dateOfBirth: [null, Validators.required],
            city: ['', Validators.required],
            country: ['', Validators.required],
            introduction: ['', Validators.required],
            interests: ['', Validators.required],
            password: ['', [Validators.required,
                            Validators.minLength(4),
                            Validators.maxLength(8)]],
            confirmPassword: ['', Validators.required]
          }, {
            validator: this.passwordMatchValidator
          });
  }


  onSignUp() {

  }



}
