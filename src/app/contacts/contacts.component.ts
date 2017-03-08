import { Component, OnInit, HostListener } from '@angular/core';

import { Contact } from '../contact';
import { Group } from '../group';
import { ContactsService } from '../contacts.service';
import { GroupsService } from '../groups.service';

import * as _ from "lodash";

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

  isCtrlDown = false;

  @HostListener('document:keydown', ['$event'])
  onCtrlDown(ev: KeyboardEvent) {
    this.isCtrlDown = ev.ctrlKey;
  }

  @HostListener('document:keyup', ['$event'])
  onCtrlUp(ev: KeyboardEvent) {
    this.isCtrlDown = ev.ctrlKey;
  }

  contacts: Contact[];
  groups: Group[];
  selectedContacts: Contact[] = [];
  selectedIds: number[] = [];
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

    this.isCreating = false;
    this.isEditing = false;

    if (this.isCtrlDown) {
      if (this.selectedContacts == undefined) {
        this.selectedContacts = [];
      }
      if (!~this.selectedIds.indexOf(contact.id)) {
        this.selectedContacts.push(contact);
        this.selectedIds.push(contact.id);
      } else {
        _.remove(this.selectedContacts, elem => elem.id === contact.id);
        _.remove(this.selectedIds, id => id === contact.id);
      }
    } else {
      this.selectedContacts = [];
      this.selectedContacts.push(contact);
      this.selectedIds = [];
      this.selectedIds.push(contact.id);
    }
  }

  isSelected(contact: Contact): boolean {
    return this.selectedIds ? !!~this.selectedIds.indexOf(contact.id) : false;
  }

  shouldShowEdit(): boolean {
    if (!this.selectedContacts) {
      return false;
    } else {
      return (this.selectedContacts.length === 1) ? true : false;
    }
  }

  shouldShowDelete(): boolean {
    return this.selectedContacts.length ? true : false;
  }

  shouldShowDetails(): boolean {
    if (!this.selectedContacts) {
      return false;
    } else {
      return (this.selectedContacts.length && !this.isEditing && !this.isCreating) ? true : false;
    }
  }

  addContact(contact): void {
    this.contactsService.createContact(contact)
      .then(() => {
        this.getContacts();
        this.isCreating = false;
        this.newContact = null;
        this.selectedContacts = [];
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
    this.selectedContacts.forEach(contact => {
      this.contactsService.deleteContact(contact.id)
        .then(() => {
          this.selectedContacts = [];
        });
    });
    this.getContacts();
  }

  startCreating(): void {
    this.isCreating = true;
    this.isEditing = false;
  }

  startEditing(): void {
    this.editedContact = Object.assign({}, this.selectedContacts[0]);
    this.isEditing = true;
    this.isCreating = false;
  }

  cancelCreating(): void {
    this.isCreating = false;
  }

  cancelEditing(): void {
    this.isEditing = false;
  }

}
