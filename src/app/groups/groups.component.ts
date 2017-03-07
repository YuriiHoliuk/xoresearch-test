import { Component, OnInit } from '@angular/core';

import { Contact } from '../contact';
import { ContactsService } from '../contacts.service';
import { Group } from '../group';
import { GroupsService } from '../groups.service';
import { ContactGroupPipe } from '../contact-group.pipe';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  constructor(
    private contactsService: ContactsService,
    private groupsService: GroupsService
  ) { }

  contacts: Contact[];
  groups: Group[];
  currentGroup: Group;

  ngOnInit() {
    this.getContacts();
    this.getGroups();
  }

  countMembers(group: string): number {
    return this.contacts.filter(contact => contact.group === group).length;
  }

  getContacts(): void {
    this.contactsService.getContacts()
      .then(contacts => this.contacts = contacts);
  }

  getGroups(): void {
    this.groupsService.getGroups()
      .then(groups => this.groups = groups);
  }

  setCurrentGroup(group: Group): void {
    if (this.currentGroup === group) {
      this.currentGroup = null;
    } else {
      this.currentGroup = group;
    }
  }

  isCreating: boolean = false;
  isEditing: boolean = false;
  newGroup: Object = {};
  editedGroup: Group = {
    id: 0,
    title: ''
  };

  startCreating() {
    this.isCreating = true;
  }

  addGroup(): void {
    this.groupsService.createGroup(this.newGroup)
      .then(() => {
        this.getGroups();
        this.isCreating = false;
        this.newGroup = {};
      });
  }

  cancelCreating() {
    this.isCreating = false;
  }

  startEditing() {
    this.isEditing = true;
    this.editedGroup.id = this.currentGroup.id;
    this.editedGroup.title = this.currentGroup.title;
    console.log(this.editedGroup);
  }

  updateContacts(oldGroupTitle: string, newGroupTitle: string): void {
    this.contacts.forEach(contact => {
      if (contact.group === oldGroupTitle) {
        contact.group = newGroupTitle;
        this.contactsService.updateContact(contact)
          .then(() => contact);
      }
    })
  }

  updateGroup(): void {
    this.groupsService.updateGroup(this.editedGroup)
      .then(() => {
        this.updateContacts(this.currentGroup.title, this.editedGroup.title);
        this.isEditing = false;
        this.currentGroup = null;
        this.editedGroup = null;
        this.getGroups();
        this.getContacts();
      });
  }

  cancelEditing() {
    this.isEditing = false;
  }

  deleteGroup(): void {
    this.groupsService.deleteGroup(this.currentGroup.id)
      .then(() => {
        this.getGroups();
        this.currentGroup = null;
      })
  }

}
