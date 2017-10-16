import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Addressbook } from './addressbook';
import { AddressbookService } from './addressbook.service';

@Component({
  selector: 'app-addressbook',
  templateUrl: './addressbook.component.html',
  styleUrls: ['./addressbook.component.css'],
  providers: [ AddressbookService ]
})
export class AddressbookComponent implements OnInit {
  addressbooks: Addressbook[];
  letter: string;
  errorMessage: string;
  submitted: boolean = false;
  confirm: boolean = false;

  constructor(private addressbookService: AddressbookService) {}

  filterContact(value) {
    this.letter = value;
  }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.addressbookService.getContact().subscribe(
      address => this.addressbooks = address,
      error => this.errorMessage = <any>error
    );
  }

  deleteContact(id) {
    this.confirm = true;
    //let r = confirm("Are you sure you want to delete this contact?");
    let r = false;
    if (r = true) {

       this.addressbookService.deleteContact(id).subscribe(
         data => {
             this.getContacts();
             return true;
           },
           error => {
            console.error("Error deleting food!");
            return Observable.throw(error);
          }
         );
    } 


  }

}
