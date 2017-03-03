import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing/app-routing.module'
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GroupsComponent } from './groups/groups.component';
import { ClockComponent } from './clock/clock.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    GroupsComponent,
    ClockComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
