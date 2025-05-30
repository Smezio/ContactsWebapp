import { Component, ChangeDetectionStrategy, signal, Input, OnInit } from "@angular/core";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Contact } from "../contact.service";
import { ContactDialogMode } from "../contactdialog.component/contactdialog.component";

@Component({
    selector: 'contact-form',
    templateUrl: './contactform.component.html',
    styleUrl: './contactform.component.css',

    imports: [
        MatFormFieldModule, MatInputModule,
        FormsModule, ReactiveFormsModule,
    ],

    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ContactForm implements OnInit{
    title = 'contactForm';

    @Input() mode : ContactDialogMode = {type: 'add'};

    readonly firstName = new FormControl('', [Validators.required]);
    readonly lastName = new FormControl('', [Validators.required]);
    readonly email = new FormControl('', [Validators.required, Validators.email]);
    readonly telephone = new FormControl('', [Validators.required, Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$')]);

    errorMessages = {
        firstName : signal(''),
        lastName : signal(''),
        email : signal(''),
        telephone : signal(''),
    }

    contact: Contact = {
        firstName : '',
        lastName : '',
        email : '',
        telephone : '',
    }

    ngOnInit(): void {
        this.fill();
    }

    // Fills the form if need
    fill(): void {
        if(this.mode.contact == null)
            return;

        this.contact = {
            id: this.mode.contact.id,
            firstName : this.mode.contact.firstName,
            lastName : this.mode.contact.lastName,
            email : this.mode.contact.email,
            telephone : this.mode.contact.telephone,
        };

        // Fills form
        this.firstName.setValue(this.mode.contact.firstName.toString());
        this.lastName.setValue(this.mode.contact.lastName.toString());
        this.email.setValue(this.mode.contact.email.toString());
        this.telephone.setValue(this.mode.contact.telephone.toString());
    }

    // Provides the contact object to parent node
    getContact() : Contact | undefined {
        // Check if fields are valid
        if(this.firstName.invalid
            || this.lastName.invalid
            || this.email.invalid
            || this.telephone.invalid
        )
            return undefined;

        // Check if fields are unchanged
        if(this.contact.firstName == this.firstName.value
            && this.contact.lastName == this.lastName.value
            && this.contact.email == this.email.value
            && this.contact.telephone == this.telephone.value
        )
            return undefined;

        
        this.contact.firstName = String(this.firstName.value);
        this.contact.lastName = String(this.lastName.value);
        this.contact.email = String(this.email.value);
        this.contact.telephone = String(this.telephone.value);
        

        return this.contact;
    }

    // Functions for form validation
    showFirstNameError() {
        if (this.firstName.hasError('required')) {
            this.errorMessages.firstName.set('First name is required');
        } else {
            this.errorMessages.firstName.set('');
        }
    }

    showLastNameError() {
        if (this.lastName.hasError('required')) {
            this.errorMessages.lastName.set('Last name is required');
        } else {
            this.errorMessages.lastName.set('');
        }
    }

    showEmailError() {
        if (this.email.hasError('required')) {
            this.errorMessages.email.set('Email is required');
        } else if (this.email.hasError('email')) {
            this.errorMessages.email.set('Email is not valid');
        } else {
            this.errorMessages.email.set('');
        }
    }

    showTelephoneError() {
        if (this.telephone.hasError('required')) {
            this.errorMessages.telephone.set('Telephone is required');
        } else if (this.email.hasError('pattern')) {
            this.errorMessages.email.set('Telephone format is not valid');
        } else {
            this.errorMessages.telephone.set('');
        }
    }
}