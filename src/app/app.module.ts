import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddressbookComponent } from './addressbook/addressbook.component';
import { AddressbookViewComponent } from './addressbook/addressbook-view.component';
import { AddressbookEditComponent } from './addressbook/addressbook-edit.component';
import { AddressbookAddComponent } from './addressbook/addressbook-add.component';
import { AddressbookService }  from './addressbook/addressbook.service';

import { PhonePipePipe } from './phone-pipe.pipe';
import { SearchFilterPipe } from './search-filter.pipe';
import { LetterFilterPipe } from './letter-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddressbookComponent,
    AddressbookViewComponent,
    AddressbookEditComponent,
    AddressbookAddComponent,
    PhonePipePipe,
    SearchFilterPipe,
    LetterFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [AddressbookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
