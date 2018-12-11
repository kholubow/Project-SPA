import { AlertifyService } from './../../../shared/services/alertify.service';
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
              private alertify: AlertifyService,
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
            gender: ['Kobieta'],
            position: ['tester'],
            username: ['', Validators.required],
            userSurname: ['', Validators.required],
            dateOfBirth: [null, Validators.required],
            city: ['', Validators.required],
            country: ['', Validators.required],
            password: ['', [Validators.required,
                            Validators.minLength(8),
                            Validators.maxLength(16)]],
            confirmPassword: ['', Validators.required]
          }, {
            validator: this.passwordMatchValidator
          });
  }


  passwordMatchValidator(g: FormGroup) {
      return g.get('password').value === g.get('confirmPassword').value ? null : {'mismatch': true};
  }


  onSignUp() {
      if (this.registerForm.valid) {
          this.user = Object.assign({}, this.registerForm.value);
          this.authService.register(this.user).subscribe(() => {
            this.alertify.success('Rejestracja przebiegła pomyślnie');
            this.router.navigate(['/logowanie']);
          }, error => {
            this.alertify.error('Wystąpił błąd podczas rejestracji');
          });
          }
  }


}
