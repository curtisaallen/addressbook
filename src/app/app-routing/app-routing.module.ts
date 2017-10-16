import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddressbookComponent } from '../addressbook/addressbook.component';
import { AddressbookViewComponent } from '../addressbook/addressbook-view.component';
import { AddressbookEditComponent } from '../addressbook/addressbook-edit.component';
import { AddressbookAddComponent } from '../addressbook/addressbook-add.component';


const routes: Routes = [
  	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	  { path: 'home', component: AddressbookComponent },
    {
        path: 'details/:id',
        component: AddressbookViewComponent,
    },
    {
        path: 'edit/:id',
        component: AddressbookEditComponent,
    },
    {
        path: 'new',
        component: AddressbookAddComponent,
    },             
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
        RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
