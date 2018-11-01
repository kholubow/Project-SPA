import { AlertifyService } from './../../../shared/services/alertify.service';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {


  baseUrl = 'http://localhost:5000/api/';
  userToken: any;
  decodedToken: any;
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private router: Router,
              private http: Http,
              private alertify: AlertifyService
  ) { }

  private requestOptions() {

        const headers = new Headers({
          'Content-type': 'application/json'
        });
        return new RequestOptions({headers: headers});

  }


  changeMemberPhoto() {

  }


  signup(username: string, password: string) {

  }

  register() {

  }


  login(username: string, password: string) {
    const dataToSendAsJson = {username, password};

    return this.http.post(this.baseUrl + 'auth/login', JSON.stringify(dataToSendAsJson), this.requestOptions()).map((response: Response) => {
        const dataOfUser = response.json();
        if (dataOfUser) {
          localStorage.setItem('token', dataOfUser.token);
          this.decodedToken = this.jwtHelper.decodeToken(dataOfUser.token);
          this.userToken = dataOfUser.token;
          this.router.navigate(['/start']);
        }
     });

  }



  logout() {
      this.userToken = null;
      localStorage.removeItem('token');
      this.decodedToken = null;
      this.alertify.success('Wylogowales sie poprawnie');
      this.router.navigate(['/end']);
  }



  chechIfSomeUserIsLoggedInViaDownloadedToken() {
    return tokenNotExpired('token');
  }


}
