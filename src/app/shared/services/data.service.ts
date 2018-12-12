import { Instance } from './../models/Instance';
import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class DataService {

baseUrl = 'http://localhost:5000/api/';
instance: Instance;

constructor(private http: Http,
            private router: Router) {}

    onSendInstance(instance: Instance, userId: number) {
        return this.http.post(this.baseUrl + 'users/addInstance/' + userId, instance, this.jwt());
    }

    private jwt() {
        let token = localStorage.getItem('token');
        if (token) {
            let headers = new Headers({
                'Authorization': 'Bearer ' + token
            });
            headers.append(
                'Content-type', 'application/json'
            );
            return new RequestOptions({headers: headers});
        }
    }

}
