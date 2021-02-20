import { Injectable } from '@angular/core';  
import {HttpClient} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http';  
import { from, Observable } from 'rxjs';  
import { Url } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class PhoneBookService {  
  Url :string;  
  token : string;  
  header : any;  
  constructor(private http : HttpClient) {   
  
    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings);  
  }  
  getPhoneBooks(model:any){  
    debugger;  
    const getPhoneBookUrl =Url;  
   return this.http.post<any>(getPhoneBookUrl,{"Name":model},{ headers: this.header});  
  }  
  createPhoneBooks(model:any){  
    debugger;  
    const createUrl =Url+"createentry";  
   return this.http.post<any>(createUrl,model,{ headers: this.header});  
  }  
   
}  
