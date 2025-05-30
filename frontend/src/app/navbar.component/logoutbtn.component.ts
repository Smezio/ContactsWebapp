import { Component } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";
import { environment } from "../../environments/environment";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";

@Component({
    selector: 'logout-btn',
    template: '<button matFab extended (click)="logout()" class="add-button"><mat-icon>logout</mat-icon>Logout</button>',
    imports: [MatButtonModule, MatIconModule],
    standalone: true,
})

export class LogoutBtn {
    constructor(private auth: AuthService){}

    // Calls Auth' for logout
    logout() {
        this.auth.logout({
            logoutParams: {
                returnTo: environment.auth.returnTo,
            }
        });
    }
}