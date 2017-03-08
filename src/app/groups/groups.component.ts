import { Component, OnInit, HostListener } from '@angular/core';

import { Contact } from '../contact';
import { ContactsService } from '../contacts.service';
import { Group } from '../group';
import { GroupsService } from '../groups.service';
import { ContactGroupPipe } from '../contact-group.pipe';

import * as _ from 'lodash';

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
  selectedGroups: Group[] = [];
  selectedIds: number[] = [];

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

  onSelect(group: Group): void {
    this.isCreating = false;
    this.isEditing = false;

    if (this.isCtrlDown) {
      if (this.selectedGroups == undefined) {
        this.selectedGroups = [];
      }
      if (!~this.selectedIds.indexOf(group.id)) {
        this.selectedGroups.push(group);
        this.selectedIds.push(group.id);
      } else {
        _.remove(this.selectedGroups, elem => group.id === elem.id);
        _.remove(this.selectedIds, id => group.id === id);
      }
    } else {
      this.selectedGroups = [];
      this.selectedGroups.push(group);
      this.selectedIds = [];
      this.selectedIds.push(group.id);
    }

  }

  isSelected(group: Group): boolean {
    return this.selectedIds ? !!~this.selectedIds.indexOf(group.id) : false;
  }

  shouldShowEdit(): boolean {
    if (!this.selectedGroups) {
      return false;
    } else {
      return (this.selectedGroups.length === 1) ? true : false;
    }
  }

  shouldShowDelete(): boolean {
    return this.selectedGroups.length ? true : false;
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
    this.editedGroup.id = this.selectedGroups[0].id;
    this.editedGroup.title = this.selectedGroups[0].title;
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
        this.updateContacts(this.selectedGroups[0].title, this.editedGroup.title);
        this.isEditing = false;
        this.selectedGroups = [];
        this.editedGroup = null;
        this.getGroups();
        this.getContacts();
      });
  }

  cancelEditing() {
    this.isEditing = false;
  }

  deleteGroup(): void {
    this.selectedGroups.forEach(group => {
      this.groupsService.deleteGroup(group.id)
        .then(() => {
          this.selectedGroups = [];
        });
    });
    this.getGroups();
  }

}
