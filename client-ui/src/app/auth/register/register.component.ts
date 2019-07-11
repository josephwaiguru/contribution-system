import { Component } from "@angular/core";
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    auth: any = {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        address: '',
        password: '',
        confirmation_password: '',
    }

    constructor(private authService: AuthService, private router: Router) {}

    onSignup(form: any) {
        if(form.valid) {
            this.authService.register(this.auth).subscribe((res: any)=> {
                // this.authService.user = res.data.user;
                // this.authService.token = res.data.token;
                console.log(res)
                //go to login
               // this.router.navigate(['/login']);
            }, (err) => {
                console.log(err)
            });
        }
    }
}