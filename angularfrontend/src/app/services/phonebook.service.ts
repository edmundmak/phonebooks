import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { IPhoneBookHttp } from '../models/http-models/phonebook-http.interface';
import { IPhoneBook } from '../models/IPhoneBook';
import { create } from 'domain';

@Injectable()
export class PhoneBookService {
  usersUrl = `${environment.apiUrl}`;

  constructor(private _http: HttpClient) { }

  getPhoneBooks(): Observable<IPhoneBookHttp> {
      debugger;

    let body={"Name":"edmund book"};

    var response=this._http.post<any>(this.usersUrl+"/PhoneBookEntry",body );
    console.log(response);
    return response;
  }
 createPhoneEntry(createPhone:IPhoneBook[]): Observable<IPhoneBookHttp> {
    debugger;

  let createPhoneBook={"Name":createPhone[0].name,"PhoneBookName":"edmund book","PhoneNumber":createPhone[0].phoneNumber};

  var response=this._http.post<any>(this.usersUrl+"/createentry",createPhoneBook );
  console.log(response);
  return response;
}
}
