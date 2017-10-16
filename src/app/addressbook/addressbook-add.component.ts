import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Addressbook } from './addressbook';
import { AddressbookService } from './addressbook.service';

@Component({
  moduleId: module.id,
  selector: 'app-addressbook-add',
  templateUrl: './addressbook-add.component.html',
})
export class AddressbookAddComponent implements OnInit {
  submitted: boolean = false;

  constructor(
    private router: Router,
    private addressbookService: AddressbookService
  ) {}

  ngOnInit() {
  }


  createContact(contact) {
    this.submitted = true;
    this.addressbookService.createContact(contact).subscribe(
        data => {
          this.router.navigate(['/home']);
          return true;
        },
        error => {
            console.log("Error saving contact");
            return Observable.throw(error);
        }
    );
  }    


}
