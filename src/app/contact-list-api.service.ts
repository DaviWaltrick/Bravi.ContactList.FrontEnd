import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './models/person';
import { Contact, ContactType } from './models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactListApiService {

  rootAddress: string = "https://bravicontactlistapi.azurewebsites.net/api/";

  constructor(private http: HttpClient) { }

  public getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.rootAddress + "people");
  }

  public addPerson(person: Person): Observable<any> {
    return this.http.post(this.rootAddress + "people", person);
  }

  public deletePerson(personId: number): Observable<any> {
    return this.http.delete(this.rootAddress + "people/" + personId.toString());
  }

  public addContact(personId: number, contact: Contact): Observable<any> {
    return this.http.post(this.rootAddress + "people/" + personId.toString() + "/contacts", contact, { headers: { 'Content-Type': 'application/json' } });
  }

  public deleteContact(personId: number, contact: Contact): Observable<any> {
    return this.http.delete(this.rootAddress + "people/" + personId.toString() + "/contacts/" + contact.contactId);
  }

  public updateContact(personId: number, contact: Contact): Observable<any> {
    return this.http.put(this.rootAddress + "people/" + personId.toString() + "/contacts/" + contact.contactId, contact, { headers: { 'Content-Type': 'application/json' } });
  }
}
