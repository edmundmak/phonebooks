import { Action } from '@ngrx/store';
import { ICreatePhoneBookHttp } from 'src/app/models/http-models/phonebook-http.interface';
import { IPhoneBook } from 'src/app/models/IPhoneBook';


import { IPhoneBookState } from '../state/phonebook.state';

export enum EPhoneBookActions {
  GetPhoneBooks = '[PhoneBook] Get PhoneBooks',
  GetPhoneBooksSuccess = '[PhoneBook] Get PhoneBooks Success',
  GetPhoneBook = '[PhoneBook] Get PhoneBook',
  GetPhoneBookSuccess = '[PhoneBook] Get PhoneBook Success',
  CreatePhoneBook = '[PhoneBook] Create PhoneBook',
  CreatePhoneBookSuccess = '[PhoneBook] Create PhoneBookSuccess'
}

export class GetPhoneBooks implements Action {
  [x: string]: any;
  public readonly type =EPhoneBookActions.GetPhoneBooks;
  constructor(public payload: string) {}
}

export class GetPhoneBooksSuccess implements Action {
  public readonly type =EPhoneBookActions.GetPhoneBooksSuccess;
  constructor(public payload: IPhoneBook[],public success:boolean,public message:string,public phoneBookName:string) {}
}

export class GetPhoneBook implements Action {
  public readonly type =EPhoneBookActions.GetPhoneBookSuccess;
  constructor(public payload: string) {}
}

export class GetPhoneBookSuccess implements Action {
  public readonly type =EPhoneBookActions.GetPhoneBookSuccess;
  constructor(public payload: IPhoneBook) {}
}

export class CreatePhoneBook implements Action {
    public readonly type =EPhoneBookActions.CreatePhoneBook;
    constructor(public payload: IPhoneBook[]) {}
  }
  
  export class CreatePhoneBookSuccess implements Action {
    public readonly type =EPhoneBookActions.CreatePhoneBookSuccess;
    constructor(public payload: ICreatePhoneBookHttp) {}
  }

export type PhoneBookActions = CreatePhoneBook|CreatePhoneBookSuccess|GetPhoneBooks | GetPhoneBooksSuccess | GetPhoneBook | GetPhoneBookSuccess;
