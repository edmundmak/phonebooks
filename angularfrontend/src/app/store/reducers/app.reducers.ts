import { IAppState } from '../state/app.state';
import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { phonebookReducers } from './phonebook.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    phonebooks: phonebookReducers
  };
  