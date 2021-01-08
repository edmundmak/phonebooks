import { ICreatePhoneBookHttp } from 'src/app/models/http-models/phonebook-http.interface';
import { IPhoneBook } from 'src/app/models/IPhoneBook';

export interface IPhoneBookState {
    phonebooks: IPhoneBook[];
    selectedPhoneBook: IPhoneBook;
    createphoneBook:ICreatePhoneBookHttp;
    success:boolean,
    message:string,
    phoneBookName:string
  }
  
  export const initialPhoneBookState: IPhoneBookState = { 
    phonebooks: null,
    selectedPhoneBook: null,
    success:false,
    message:"",
    phoneBookName:"",
    createphoneBook:null
  };

  