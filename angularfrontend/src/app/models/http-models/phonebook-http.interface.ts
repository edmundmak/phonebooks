import { IPhoneBook } from '../IPhoneBook';
export interface IPhoneBookHttp {
  getEntryResponses: IPhoneBook[],
  message: string,
  phoneBookName: string,
  success: boolean
}

export interface ICreatePhoneBookHttp {
  message: string,
  success: boolean
}