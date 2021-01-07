import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom, mergeMap } from 'rxjs/operators';

import { IAppState } from '../state/app.state';


import { CreatePhoneBook, CreatePhoneBookSuccess, EPhoneBookActions, GetPhoneBooks, GetPhoneBooksSuccess } from '../actions/phonebook.actions';
import { IPhoneBookHttp } from 'src/app/models/http-models/phonebook-http.interface';
import { PhoneBookService } from 'src/app/services/phonebook.service';

@Injectable()
export class PhonebookEffects {
 /*  @Effect()
  getUser$ = this._actions$.pipe(
    ofType<GetPhoneBooks>(EPhoneBookActions.GetPhoneBooks),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectUserList))),
    switchMap(([id, users]) => {
      const selectedUser = users.filter(user => user.id === +id)[0];
      return of(new GetUserSuccess(selectedUser));
    })
  );

  @Effect() submitForm$ = this._actions$.pipe(
    ofType(EPhoneBookActions.CreatePhoneBook),
    mergeMap((action: CreatePhoneBook) =>
        this.quoteApiService.submitSection(action.quoteId, action.form, action.addProducts, action.dontNav, action.verticalNav).pipe(
            map(this.loadedFn),
            catchError(this.errFn)
        )
    )
); */

/* @Effect() submitForm$ = this._actions$.pipe(
  ofType(EPhoneBookActions.CreatePhoneBook),
  mergeMap((action: CreatePhoneBook) =>
  this._phonebookService.createPhoneEntry(action.payload).pipe(
        
      )
  )); */

  @Effect()
  getConfig$ = this._actions$.pipe(
    ofType<CreatePhoneBook>(EPhoneBookActions.CreatePhoneBook),
    switchMap((action: CreatePhoneBook) => this._phonebookService.createPhoneEntry(action.payload)),
    switchMap((phonebookHttp: IPhoneBookHttp) => {
      debugger;
      return of(new CreatePhoneBookSuccess (phonebookHttp.getEntryResponses));
    })
  );
 

  @Effect()
  getPhoneBooks$ = this._actions$.pipe(
    ofType<GetPhoneBooks>(EPhoneBookActions.GetPhoneBooks),
    switchMap(() => this._phonebookService.getPhoneBooks()),
    switchMap((phonebookHttp: IPhoneBookHttp) =>{ 
        return of(new GetPhoneBooksSuccess(phonebookHttp.getEntryResponses,phonebookHttp.success,phonebookHttp.message, phonebookHttp.phoneBookName))
    
    })
  );

  constructor(
    private _phonebookService: PhoneBookService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
