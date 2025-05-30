import { Component } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";

@Component({
    selector: 'login-btn',
    template: '<button matFab extended (click)="login()" class="add-button"><mat-icon>login</mat-icon>Login</button>',
    imports: [MatButtonModule, MatIconModule],
    standalone: true,
})

export class LoginBtn {
    constructor(private auth: AuthService){}

    // Calls Auth0 for authentication
    login() {
        this.auth.loginWithRedirect();
    }
}