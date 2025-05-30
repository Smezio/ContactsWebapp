import { Component } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";

@Component({
    selector: 'login-btn',
    template: '<button class="btn btn-primary btn-block" (click)="login()">Log In</button>',
    standalone: true,
})

export class LoginBtn {
    constructor(private auth: AuthService){}

    // Calls Auth0 for authentication
    login() {
        this.auth.loginWithRedirect();
    }
}