import { Component, OnInit } from '@angular/core';
import { ContactListApiService } from '../contact-list-api.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Person } from '../models/person';
import { EditContactDialogComponent } from '../edit-contact-dialog/edit-contact-dialog.component';
import { Contact } from '../models/contact';
import { AddContactDialogComponent } from '../add-contact-dialog-component/add-contact-dialog-component';
import { AddPersonContactDialogComponent } from '../add-person-contact-dialog/add-person-contact-dialog.component';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  people: Person[] = [];

  constructor(
    private snackBar: MatSnackBar,
    private dialog: MatDialog, 
    private contactListApiService: ContactListApiService) { }

  editContact(personId: number, contact: Contact): void {
    const dialogRef = this.dialog.open(EditContactDialogComponent, {
      width: '250px',
      data: { contact: contact, personId: personId }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refreshContactList();
    });
  }

  deleteContact(personId: number, contact: Contact) {
    this.contactListApiService.deleteContact(personId, contact).subscribe(
      result => {       
        this.snackBar.open("Contact Deleted!", "OK", { duration: 3000 });
        this.refreshContactList();
      },
      error => {
        this.snackBar.open(error.message, "OK", { duration: 3000 });
      }
    );
  }

  addContact(personId: number): void {
    const dialogRef = this.dialog.open(AddContactDialogComponent, {
      width: '250px',
      data: { personId: personId }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refreshContactList();
    });
  }

  addPerson(): void {
    const dialogRef = this.dialog.open(AddPersonContactDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.refreshContactList();
    });
  }

  deletePerson(personId: number) {
    this.contactListApiService.deletePerson(personId).subscribe(
      result => {       
        this.snackBar.open("Person Deleted!", "OK", { duration: 3000 });
        this.refreshContactList();
      },
      error => {
        this.snackBar.open(error.message, "OK", { duration: 3000 });
      }
    );
  }

  refreshContactList() {
    this.contactListApiService.getPeople().subscribe(result => { this.people = result });
  }

  ngOnInit() {
    this.refreshContactList();
  }
}
