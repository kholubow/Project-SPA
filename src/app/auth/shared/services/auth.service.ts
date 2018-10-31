import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class AuthService {


  baseUrl = 'http://localhost:5000/api/';

  constructor(private router: Router,
              private http: Http
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

  }



  logout() {

  }



  chechIfSomeUserIsLoggedInViaDownloadedToken() {

  }


}
