import { Component } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";
import { environment } from "../environments/environment";

@Component({
    selector: 'logout-btn',
    template: '<button class="btn btn-primary btn-block" (click)="logout()">Log out</button>',
    styles: [],
    standalone: true,
})

export class LogoutBtn {
    constructor(private auth: AuthService){}

    logout() {
        this.auth.logout({
            logoutParams: {
                returnTo: environment.auth.returnTo,
            }
        });
    }
}