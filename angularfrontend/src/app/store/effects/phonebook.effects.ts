import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom, mergeMap } from 'rxjs/operators';

import { IAppState } from '../state/app.state';


import { CreatePhoneBook, CreatePhoneBookSuccess, EPhoneBookActions, GetPhoneBooks, GetPhoneBooksSuccess } from '../actions/phonebook.actions';
import { ICreatePhoneBookHttp, IPhoneBookHttp } from 'src/app/models/http-models/phonebook-http.interface';
import { PhoneBookService } from 'src/app/services/phonebook.service';

@Injectable()
export class PhonebookEffects {
 

  @Effect()
  createPhoneBook$ = this._actions$.pipe(
    ofType<CreatePhoneBook>(EPhoneBookActions.CreatePhoneBook),
    switchMap((action: CreatePhoneBook) => this._phonebookService.createPhoneEntry(action.payload)),
    switchMap((createphoneBookHttp: ICreatePhoneBookHttp) => {
      debugger;
      return of(new CreatePhoneBookSuccess (createphoneBookHttp));
    })
  );
 

  @Effect()
  getPhoneBooks$ = this._actions$.pipe(
    ofType<GetPhoneBooks>(EPhoneBookActions.GetPhoneBooks),
    switchMap((action:GetPhoneBooks) => this._phonebookService.getPhoneBooks(action.payload)),
    switchMap((phonebookHttp: IPhoneBookHttp) =>{ 
      debugger;  
      return of(new GetPhoneBooksSuccess(phonebookHttp.getEntryResponses,phonebookHttp.success,phonebookHttp.message, phonebookHttp.phoneBookName))
    
    })
  );

  constructor(
    private _phonebookService: PhoneBookService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
