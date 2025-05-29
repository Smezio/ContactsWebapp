import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";

/*export class Contact {
    
    private id : Number;
    private firstName : String;
    private lastName : String;
    private email : String;
    private telephone : String;

    constructor() {
        this.id = -1;
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.telephone = '';
    }

    public getId() : Number { return this.id; }
    public setId(id : Number) : void { this.id = id; }

    public getFirstName() : String { return this.firstName; }
    public setFirstName(firstName : String) : void { this.firstName = firstName; }

    public getLastName() : String { return this.lastName; }
    public setLastName(lastName : String) : void { this.lastName = lastName; }

    public getEmail() : String { return this.email; }
    public setEmail(email : String) : void { this.email = email; }

    public getTelephone() : String { return this.telephone; }
    public setTelephone(telephone : String) : void { this.telephone = telephone; }
}*/

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
}