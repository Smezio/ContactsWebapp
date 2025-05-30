import { Component, inject, Injectable, model } from "@angular/core";
import {
    MAT_DIALOG_DATA,
    MatDialogActions,
    MatDialogRef,
    MatDialogTitle,
    MatDialogContent
} from "@angular/material/dialog"
import { Contact, ContactService } from "../contact.service";

@Component({
    selector: 'error-dialog',
    templateUrl: './errordialog.component.html',

    imports: [
        MatDialogActions,
        MatDialogTitle,
        MatDialogContent
    ],
})


export class ErrorDialog {
    title = 'errorDialog'

    readonly dialogRef = inject(MatDialogRef<ErrorDialog>);
    readonly data = inject<any>(MAT_DIALOG_DATA);
    readonly message = model(this.data);

    // Cancel dialog
    close() : void {
        this.dialogRef.close();
    }
}