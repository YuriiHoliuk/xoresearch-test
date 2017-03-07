import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AppRoutingModule } from './app-routing/app-routing.module'

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GroupsComponent } from './groups/groups.component';
import { ClockComponent } from './clock/clock.component';
import { GroupsService } from './groups.service';
import { ContactsService } from './contacts.service';
import { ContactGroupPipe } from './contact-group.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    GroupsComponent,
    ClockComponent,
    ContactGroupPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [
    ContactsService,
    GroupsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
