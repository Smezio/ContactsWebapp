import { Component } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";

@Component({
    selector: 'login-btn',
    templateUrl: './loginbtn.component.html',
    //standalone: true,
})

export class LoginBtn {
    constructor(private auth: AuthService){}

    login() {
        this.auth.loginWithRedirect();
    }
}