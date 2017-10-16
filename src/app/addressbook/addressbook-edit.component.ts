import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Addressbook } from './addressbook';
import { AddressbookService } from './addressbook.service';
@Component({
  moduleId: module.id,
  selector: 'app-addressbook-edit',
  templateUrl: './addressbook-edit.component.html',
  providers: [ AddressbookService ]
})
export class AddressbookEditComponent implements OnInit {

  constructor(
      private http: Http,
      private route:ActivatedRoute,
      private addressbookService: AddressbookService
  ) { }

  @Input()
  id:number;
  contact:Addressbook;
  submitted: boolean = false;

  ngOnInit() {
      let contactRequest = this.route.params.flatMap((params: Params) =>  this.showContact(+params['id']));
      contactRequest.subscribe(response => this.contact = response  );
  }

  showContact(id){
     return this.addressbookService.showContact(id)
  }

  editContact(id, contact) {
    this.submitted = true;
    console.log(contact);
    this.addressbookService.editContact(id, contact).subscribe(
          data => {
            this.showContact(id);
            this.submitted = false;
            return true;
          },
          error => {
           console.error("Error deleting food!");
           return Observable.throw(error);
         }
    );
  } 

}
