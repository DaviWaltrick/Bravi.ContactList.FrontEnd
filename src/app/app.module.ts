import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "./material/material.module";

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { ContactListApiService } from './contact-list-api.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditContactDialogComponent } from './edit-contact-dialog/edit-contact-dialog.component';
import { AddContactDialogComponent } from './add-contact-dialog-component/add-contact-dialog-component';
import { AddPersonContactDialogComponent } from './add-person-contact-dialog/add-person-contact-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    EditContactDialogComponent,
    AddContactDialogComponent,
    AddPersonContactDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [ContactListApiService],
  entryComponents: [EditContactDialogComponent, AddContactDialogComponent, AddPersonContactDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
