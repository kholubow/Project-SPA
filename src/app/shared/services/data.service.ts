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

    onGetInstances(): Observable<Instance[]> {
        return this.http.get(this.baseUrl + 'users/getInstances', this.jwt())
                        .map(response => <Instance[]>response.json());
    }

    onApprovalInstance(id: number, approval: string, userId: number) {
        var dataToSendAsJSON = { id, approval };
        return this.http.post(this.baseUrl + 'users/acceptInstance/' + userId, JSON.stringify(dataToSendAsJSON), this.jwt());
    }

    onDisapprovalInstance(id: number, approval: string, reason: string, userId: number) {
        var dataToSendAsJSON = { id, approval, reason };
        return this.http.post(this.baseUrl + 'users/disapprovalInstance/' + userId, JSON.stringify(dataToSendAsJSON), this.jwt());
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
