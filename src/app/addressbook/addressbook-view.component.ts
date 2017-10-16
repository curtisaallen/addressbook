import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Addressbook } from './addressbook';
import { AddressbookService } from './addressbook.service';


@Component({
  moduleId: module.id,
  selector: 'app-addressbook-view',
  templateUrl: './addressbook-view.component.html',
  providers: [ AddressbookService ]
})
export class AddressbookViewComponent implements OnInit {

  constructor(
      private http: Http,
      private route:ActivatedRoute,
      private addressbookService: AddressbookService
  ) { }

  @Input()
  id:number;
  contact:Addressbook;

  ngOnInit() {
      let contactRequest = this.route.params.flatMap((params: Params) =>  this.showContact(+params['id']));
      contactRequest.subscribe(response => this.contact = response  );
  }

  showContact(id){
     return this.addressbookService.showContact(id)
  }
}
