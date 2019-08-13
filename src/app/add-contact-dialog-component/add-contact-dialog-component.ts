import { Component, OnInit, Inject } from '@angular/core';
import { ContactListApiService } from '../contact-list-api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Contact, ContactType } from '../models/contact';

export interface AddContactDialogData {
  personId: number
}

@Component({
  selector: 'app-add-contact-dialog',
  templateUrl: './add-contact-dialog-component.html',
  styleUrls: ['./add-contact-dialog-component.scss']
})
export class AddContactDialogComponent implements OnInit {

  contact: Contact;

  constructor(
    private contactListApiService: ContactListApiService,
    public dialogRef: MatDialogRef<AddContactDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddContactDialogData) {
    this.contact = new Contact;
  }

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.contactListApiService.addContact(this.data.personId, this.contact).subscribe(result => { this.dialogRef.close(); });
  }

  ngOnInit() {
  }

}
