import { Component, inject, Injectable, model, ViewChild } from "@angular/core";
import {
    MAT_DIALOG_DATA,
    MatDialogActions,
    MatDialogRef,
    MatDialogClose,
    MatDialogTitle
} from "@angular/material/dialog"
import { ContactForm } from "../contactform.component/contactform.component";
import { Contact } from "../contact.service";

export interface ContactDialogMode {
    type : 'add' | 'edit',
    contact ?: Contact,
}

@Component({
    selector: 'contact-dialog',
    templateUrl: './contactdialog.component.html',

    imports: [
        MatDialogActions,
        MatDialogClose,
        MatDialogTitle,
        ContactForm
    ],
})


export class ContactDialog {
    title = 'contactDialog'

    readonly dialogRef = inject(MatDialogRef<ContactDialog>);
    readonly data = inject<ContactDialogMode>(MAT_DIALOG_DATA);
    readonly mode = model(this.data);

    @ViewChild('formRef') formRef!: ContactForm;


    create() : void {
        console.log('Contact Created');
        console.log(this.formRef.getContact());
        
    }

    update() : void {
        console.log('Contact Updated');
        console.log(this.formRef.getContact());
    }

    close() : void {
        this.dialogRef.close();
    }
}