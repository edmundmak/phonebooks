import { Injectable } from '@angular/core';  
import {HttpClient} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http';  
import { from, Observable } from 'rxjs'; 
import { PhonebookName, Url } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {  
  Url :string;  
  token : string;  
  header : any;  
  constructor(private http : HttpClient) {   
  
    
    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings);  
  }  
  Login(model : any){  
    debugger;  
    const loginUrl = Url+'login';  
   return this.http.post<any>(loginUrl,model,{ headers: this.header});  
  }  
   
}  
