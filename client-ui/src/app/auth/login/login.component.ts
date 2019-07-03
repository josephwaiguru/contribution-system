import { Component } from "@angular/core";
import { Router } from '@angular/router';

import { AuthService } from '../shared/auth.service';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    login: any = {
        email: '',
        password: ''
    };

    constructor(private authService: AuthService, private router: Router) {}

    onLogin(form: any) {
        if(form.valid) {
            this.authService.login(this.login).subscribe((res: any)=> {
                this.authService.user = res.data.user;
                this.authService.token = res.data.token;
                
                this.router.navigate(['/dashboard']);
            }, (err) => {
                console.log(err)
            });
        }
    }    
}