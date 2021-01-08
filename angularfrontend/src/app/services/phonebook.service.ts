import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { IPhoneBookHttp } from '../models/http-models/phonebook-http.interface';
import { IPhoneBook } from '../models/IPhoneBook';

@Injectable()
export class PhoneBookService {
  usersUrl = `${environment.apiUrl}`;
  constructor(private _http: HttpClient) { }

  getPhoneBooks(getPhoneBooksRequest:string): Observable<IPhoneBookHttp> {
      debugger;
    let getPhoneBooks={"Name":getPhoneBooksRequest};
    var response=this._http.post<any>(this.usersUrl+"/PhoneBookEntry",getPhoneBooks);
    console.log(response);
    return response;
  }
 createPhoneEntry(createPhoneRequest:IPhoneBook[]): Observable<IPhoneBookHttp> {
    debugger;
  let createPhoneBook={"Name":createPhoneRequest[0].name,"PhoneBookName":createPhoneRequest[0].phoneBookName,"PhoneNumber":createPhoneRequest[0].phoneNumber};
  var response=this._http.post<any>(this.usersUrl+"/createentry",createPhoneBook );
  console.log(response);
  return response;
}
}
