import { Component, inject, Injectable, model, ViewChild } from "@angular/core";
import {
    MAT_DIALOG_DATA,
    MatDialogActions,
    MatDialogRef,
    MatDialogTitle
} from "@angular/material/dialog"
import { ContactForm } from "../contactform.component/contactform.component";
import { Contact, ContactService } from "../contact.service";

export interface ContactDialogMode {
    type : 'add' | 'edit',
    contact ?: Contact,
}

@Component({
    selector: 'contact-dialog',
    templateUrl: './contactdialog.component.html',

    imports: [
        MatDialogActions,
        MatDialogTitle,
        ContactForm
    ],
})


export class ContactDialog {
    title = 'contactDialog'

    readonly dialogRef = inject(MatDialogRef<ContactDialog>);
    readonly data = inject<ContactDialogMode>(MAT_DIALOG_DATA);
    readonly mode = model(this.data);
    readonly contactService = inject(ContactService);

    @ViewChild('formRef') formRef!: ContactForm;

    // Elaborates the request
    submit() : void {
        let contact : Contact | undefined = this.formRef.getContact();

        if(contact == undefined)
            return;

        if(this.mode().type == 'add') { // Add new contact
            this.contactService.addContact(contact)
                .subscribe({
                    next: (result) => {
                        console.log(`Contact of ${result.firstName} ${result.lastName} created`);
                        this.dialogRef.close(result);
                    },
                    error: (error) => {
                        console.log('Error occurs: ' + error);
                        this.dialogRef.close();
                    }
                })
        }
        else if(this.mode().type == 'edit') { // Edit existing contact
            this.contactService.updateContact(contact)
                .subscribe({
                    next: (result) => {
                        console.log(`Contact of ${result.firstName} ${result.lastName} updated`);
                        this.dialogRef.close(result);
                    },
                    error: (error) => {
                        console.log('Error occurs: ' + error);
                        this.dialogRef.close();
                    }
                })
        }
        
        
    }

    close() : void {
        this.dialogRef.close();
    }
}