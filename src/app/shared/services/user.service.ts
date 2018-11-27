import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http } from '@angular/http';
import { User } from './../models/User';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

baseUrl = 'http://localhost:5000/api/';

constructor(private http: Http) {}


    getUsers(): Observable<User[]> {
        return this.http.get(this.baseUrl + 'users', this.jwt())
                        .map(response => <User[]>response.json());
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
