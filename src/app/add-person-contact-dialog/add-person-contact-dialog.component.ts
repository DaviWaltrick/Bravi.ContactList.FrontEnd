import { Component, OnInit } from '@angular/core';
import { ContactListApiService } from '../contact-list-api.service';
import { MatDialogRef } from '@angular/material';
import { Person } from '../models/person';

@Component({
  selector: 'app-add-person-contact-dialog',
  templateUrl: './add-person-contact-dialog.component.html',
  styleUrls: ['./add-person-contact-dialog.component.scss']
})
export class AddPersonContactDialogComponent implements OnInit {

  person: Person;

  constructor(
    private contactListApiService: ContactListApiService,
    public dialogRef: MatDialogRef<AddPersonContactDialogComponent>) {
    this.person = new Person;
  }

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.contactListApiService.addPerson(this.person).subscribe(result => { this.dialogRef.close(); });
  }

  ngOnInit() {
  }

}
