import { Component, OnInit } from '@angular/core';

import { Contact } from '../contact';
import { Group } from '../group';
import { ContactsService } from '../contacts.service';
import { GroupsService } from '../groups.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(
    private contactsService: ContactsService,
    private groupsService: GroupsService
  ) { }

  contacts: Contact[];
  groups: Group[];
  selectedContact: Contact;
  editedContact: Contact;
  newContact: Object = {
    firstName: '',
    surname: '',
    age: '',
    group: '',
    description: '',
    note: ''
  };

  isCreating: boolean = false;
  isEditing: boolean = false;

  ngOnInit() {
    this.getContacts();
    this.getGroups();
  }

  getContacts(): void {
    this.contactsService.getContacts()
      .then(contacts => this.contacts = contacts);
  }

  getGroups(): void {
    this.groupsService.getGroups()
      .then(groups => this.groups = groups);
  }

  onSelect(contact: Contact): void {
    this.selectedContact = contact;
  }

  isSelected(contact: Contact): boolean {
    return contact === this.selectedContact ? true : false;
  }

  addContact(contact): void {
    this.contactsService.createContact(contact)
      .then(() => {
        this.getContacts();
        this.isCreating = false;
        this.newContact = null;
        this.selectedContact = null;
      });
  }
  
  updateContact(): void {
    this.contactsService.updateContact(this.editedContact)
      .then(() => {
        this.getContacts();
        this.isEditing = false;
        this.editedContact = null;
      });
  }

  deleteContact(): void {
    this.contactsService.deleteContact(this.selectedContact.id)
      .then(() => {
        this.getContacts();
        this.selectedContact = null;
      })
  }

  startCreating():void {
    this.isCreating = true;
  }

  startEditing():void {
    this.editedContact = this.selectedContact;
    this.isEditing = true;
  }

  cancelCreating(): void {
    this.isCreating = false;
  }

  cancelEditing(): void {
    this.isEditing = false;
  }

}
