import { Component, inject, Injectable, model } from "@angular/core";
import {
    MAT_DIALOG_DATA,
    MatDialogActions,
    MatDialogRef,
    MatDialogTitle
} from "@angular/material/dialog"
import { Contact, ContactService } from "../contact.service";

@Component({
    selector: 'delete-dialog',
    templateUrl: './deletedialog.component.html',

    imports: [
        MatDialogActions,
        MatDialogTitle
    ],
})


export class DeleteDialog {
    title = 'deleteDialog'

    readonly dialogRef = inject(MatDialogRef<DeleteDialog>);
    readonly data = inject<Number>(MAT_DIALOG_DATA);
    readonly contactId = model(this.data);

    readonly contactService = inject(ContactService);
    deletedContact : Contact = {
        id: -1,
        firstName : '',
        lastName : '',
        email : '',
        telephone : '',
    };

    delete() : void {
        this.contactService.deleteContactById(this.data)
            .subscribe({
                next: (result) => {
                    console.log('Contact ' + this.contactId + ' deleted');
                    this.dialogRef.close(this.contactId());
                },
                error: (error) => {
                    console.log('Error occurs: ' + error);
                    this.dialogRef.close();
                }
            });
    }

    close() : void {
        this.dialogRef.close();
    }
}