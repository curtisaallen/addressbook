import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Addressbook } from './addressbook';

@Injectable()
export class AddressbookService {
  private contactUrl = 'https://blooming-harbor-35084.herokuapp.com/contact_infos.json';
  private contactPostUrl = 'https://blooming-harbor-35084.herokuapp.com/contact_infos';
  constructor(private http: Http) { }
  
  getContact(): Observable<Addressbook[]> {
     return this.http.get(this.contactUrl).map((response: Response) => <Addressbook[]>response.json()).catch(this.handleError);
  }


  showContact(id) {
   return this.http.get(`${this.contactPostUrl}/${id}`).map((response: Response) => <Addressbook[]>response.json()).catch(this.handleError);
  }

  deleteContact(id) {
   return this.http.delete(`${this.contactPostUrl}/${id}`).map((response: Response) => <Addressbook[]>response.json()).catch(this.handleError);
  }

  editContact(id, contact) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(contact);
    return this.http.put(`${this.contactPostUrl}/${id}`, body, options).map((response: Response) => <Addressbook[]>response.json()).catch(this.handleError);   
  }

  createContact(contact) {
      let headers = new Headers({'Content-Type' : 'application/json'});
      let options = new RequestOptions({ headers: headers});
      return this.http.post(`${this.contactPostUrl}`, JSON.stringify(contact.value), {headers: headers}).map((response: Response) => response.json());
  }


  private handleError(error: Response | any) {
      let errMsg: string;
      if(error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();  
      }
      console.error(errMsg);
      return Observable.throw(errMsg);
  }
}
