import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "../environments/environment";


export interface Contact {
    id : Number;
    firstName : String;
    lastName : String;
    email : String;
    telephone : String;
}

@Injectable({providedIn: 'root'}) // understand providedIn param
export class ContactService {

    constructor(private http: HttpClient) {}

    private apiUrl = environment.apiUrl + '/contacts';

    getContacts() : Observable<Contact[]> {
        return this.http.get<Contact[]>(this.apiUrl);
    }

    addContact(contact : Contact) : Observable<Contact> {
        return this.http.post<Contact>(this.apiUrl, contact);
    }

    updateContact(contact : Contact) : Observable<Contact> {
        const updateUrl = this.apiUrl + '/' + contact.id;
        return this.http.put<Contact>(updateUrl, contact);
    }

    deleteContactById(contactId : Number) : Observable<Contact> {
        const deleteUrl = this.apiUrl + '/' + contactId;
        return this.http.delete<Contact>(deleteUrl);
    }
}