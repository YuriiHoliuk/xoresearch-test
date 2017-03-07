import { Pipe, PipeTransform } from '@angular/core';

import { Group } from './group';
import { Contact } from './contact';

@Pipe({
  name: 'contactGroup'
})
export class ContactGroupPipe implements PipeTransform {

  transform(contacts: Contact[], group: Group): Contact[] {
    return contacts.filter(contact => contact.group === group.title);
  }

}
