import { Component, inject, OnInit } from "@angular/core";
import { Contact, ContactService } from "../contact.service";
import { MatTableModule } from "@angular/material/table"
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";

import { MatDialog} from '@angular/material/dialog'
import { DeleteDialog } from "../deletedialog.component/deletedialog.component";
import { ContactDialog, ContactDialogMode } from "../contactdialog.component/contactdialog.component";
import { ErrorDialog } from "../errordialog.component/errordialog.component";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
    selector: 'contacts-table',
    imports: [MatTableModule, MatButtonModule, MatIconModule],
    templateUrl: './contactstable.component.html',
    styleUrl: './contactstable.component.css',
})

export class ContactsTable implements OnInit {
    title = 'contactsTable';

    readonly contactService = inject(ContactService);
    readonly dialog = inject(MatDialog);

    displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'telephone', 'actions'];
    contacts : Contact[] = [];

    ngOnInit(): void {
        this.fetchData();
    }

    // Calls API to get contacts
    fetchData() : void {
        this.contactService.getContacts()
            .subscribe({
                next : (data) => {
                    this.contacts = data;
                },
                error : (error) => {
                    console.log(error);
                    this.dialog.open(ErrorDialog, {
                        data: error.message,
                    });
                },
            });
    }

    // Opens dialog for adding or updating of contact
    openAddDialog(dialogMode : ContactDialogMode) : void {
        let dialogRef = this.dialog.open(ContactDialog, {
            data: dialogMode,
        });

        dialogRef.afterClosed()
            .subscribe(
                result => {
                    if(result != undefined) {
                        if(result === 'close')
                            return;

                        if(dialogMode.type == 'add') {
                            console.log('Contact created successfully');
                            this.contacts = [...this.contacts, result];
                        }
                        else if(dialogMode.type == 'edit') {
                            console.log('Contact updated successfully');
                            this.contacts = this.contacts.map((value) => {
                                if(result.id == value.id) {
                                    return result;
                                }
                                else {
                                    return value;
                                }
                            });
                        }
                        
                    }
                    else {
                        console.log('Error occurs');
                        this.dialog.open(ErrorDialog, {
                            data: 'Ops, something went wrong!',
                        });
                    }
                }
            );
    }

    // Opens dialog for deletion confirmation
    openDeleteDialog(contactId : Number) : void {
        let dialogRef = this.dialog.open(DeleteDialog, {
            data: contactId,
        });

        dialogRef.afterClosed()
            .subscribe(
                result => {
                    if(result != null) {
                        if(result === 'close')
                            return;
                        
                        console.log('Contact deleted successfully');
                        this.contacts = this.contacts.filter(value => value.id != result);
                    }
                    else {
                        console.log('Deletion failed');
                    }
                    
                }
            );
    }
}