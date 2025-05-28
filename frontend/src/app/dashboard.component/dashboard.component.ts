import { Component, inject, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Contact, ContactService } from "../contact.service";

@Component({
    selector: 'dashboard',
    imports: [],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
})

export class DashboardComponent implements OnInit {
    title = 'dashboard';

    contactService = inject(ContactService);

    contacts : Contact[] = [];

    ngOnInit(): void {
        this.fetchData();
    }

    fetchData() : void {
        this.contactService.getContacts()
            .subscribe({
                next : (data) => {
                    this.contacts = data;
                    console.log(data);
                },
                error : (error) => {
                    console.log(error);
                }
            });
    }
}