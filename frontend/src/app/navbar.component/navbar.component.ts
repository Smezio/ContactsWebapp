import { Component } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";
import { LoginBtn } from "./loginbtn.component";
import { LogoutBtn } from "./logoutbtn.component";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { AsyncPipe } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";

@Component({
    selector: 'navbar',
    imports: [RouterLink, RouterLinkActive, AsyncPipe, LoginBtn, LogoutBtn, MatIconModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})

export class NavbarComponent {
    title = 'navbar'

    constructor(public auth: AuthService) {  }
}