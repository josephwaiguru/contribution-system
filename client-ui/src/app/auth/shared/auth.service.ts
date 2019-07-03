import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {

    private _token: string;

	private _user: any;

	private tokenName: string = 'fh_token';

    constructor(private http: HttpClient) {}

    public login(post: any) {
        return this.http.post(`${environment.api}/login`, post);
    }

    public register(post: any) {
        return this.http.post(`${environment.api}/register`, post);
    }

    public logout() {
		this.user = null;
		this.token = null;
	}

	public isLoggedIn() {
		var token: any = sessionStorage.getItem(this.tokenName);

		if(token !== undefined && token !== 'null') {
			return true;
		}

		//todo: check if token is valid

		return false;
	}

	set user(user: any) {
		sessionStorage.setItem('client_user', JSON.stringify(user));
        this._user = user;
    }

    get user(): any {
    	if(!this._user) {
    		this.user = JSON.parse(sessionStorage.getItem('client_user'));
    	}
        return this._user;
    }

	set token(token: string) {
        sessionStorage.setItem(this.tokenName, token);
        this._token = token;
    }

    get token() {
        if(this._token === null || this._token === undefined) {
            this.token = sessionStorage.getItem(this.tokenName);
        }

        return this._token;
    }
}