import { NgModule } from '@angular/core';
import {UIRouterModule} from "ui-router-ng2";

import { ContactsComponent } from '../contacts/contacts.component';
import { GroupsComponent } from '../groups/groups.component';
import { ClockComponent } from '../clock/clock.component';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';

const states = [
  // {
  //   url: '',
  //   redirectTo: '/contacts',
  //   urlMatch: 'full'
  // },
  {
    name: 'contacts',
    url: '/contacts',
    component: ContactsComponent
  },
  {
    name: 'groups',
    url: '/groups',
    component: GroupsComponent
  },
  {
    name: 'clock',
    url: '/clock',
    component: ClockComponent
  }
]

@NgModule({
  imports: [ UIRouterModule.forRoot({states: states, useHash: false}) ],
  exports: [ UIRouterModule ]
})
export class AppRoutingModule { }
