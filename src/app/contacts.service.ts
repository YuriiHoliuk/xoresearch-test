import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Contact } from './contact';


@Injectable()
export class ContactsService {

  private contactsUrl: string = 'api/contacts';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getContacts(): Promise<Contact[]> {
    return this.http.get(this.contactsUrl)
      .toPromise()
      .then(contacts => contacts.json().data as Contact[])
      .catch(this.handleError);
  }
  
  getContact(id: number): Promise<Contact> {
    const url: string = `${this.contactsUrl}/${id}`;
    return this.http
      .get(url)
      .toPromise()
      .then(contact => contact.json().data)
      .catch(this.handleError);
  }

  updateContact(contact: Contact): Promise<Contact> {
    const url: string = `${this.contactsUrl}/${contact.id}`;
    return this.http
      .put(url, JSON.stringify(contact), { headers: this.headers })
      .toPromise()
      .then(() => contact)
      .catch(this.handleError);
  }

  createContact(contact): Promise<Contact> {
    return this.http
      .post(this.contactsUrl, JSON.stringify(contact), { headers: this.headers })
      .toPromise()
      .then(contact => contact.json().data)
      .catch(this.handleError);
  }

  deleteContact(id: number): Promise<void> {
    const url: string = `${this.contactsUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Data not found', error);
    return Promise.reject(error.message || error);
  }

}
