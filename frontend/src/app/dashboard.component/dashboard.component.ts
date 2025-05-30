import { Component } from "@angular/core";
import { ContactsTable } from "../contactstable.component/contactstable.component";

@Component({
    selector: 'home',
    imports: [ContactsTable],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
})

export class DashboardComponent {
    title = 'dashboard';
}