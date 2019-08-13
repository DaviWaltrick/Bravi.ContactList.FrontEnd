import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Contact } from '../models/contact';
import { ContactListApiService } from '../contact-list-api.service';
import { config } from 'rxjs';

export interface DialogData {
  personId: number
  contact: Contact
}

@Component({
  selector: 'app-edit-contact-dialog',
  templateUrl: './edit-contact-dialog.component.html',
  styleUrls: ['./edit-contact-dialog.component.scss']
})

export class EditContactDialogComponent implements OnInit {

  constructor(
    private snackBar: MatSnackBar,
    private contactListApiService: ContactListApiService,
    public dialogRef: MatDialogRef<EditContactDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.contactListApiService.updateContact(this.data.personId, this.data.contact).subscribe(
      result => {       
        this.snackBar.open("Contact Saved!", "OK", { duration: 3000 });
        this.dialogRef.close(); 
      },
      error => {
        this.snackBar.open(error.message, "OK", { duration: 3000 });
      }
    );
  }

  ngOnInit() {
  }
}