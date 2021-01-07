import { initialPhoneBookState, IPhoneBookState } from './phonebook.state';
import { RouterReducerState } from '@ngrx/router-store';

export interface IAppState {
    router?: RouterReducerState;
    phonebooks: IPhoneBookState;
  }
  
  export const initialAppState: IAppState = {
    phonebooks: initialPhoneBookState
  };
  
  export function getInitialState(): IAppState {
    return initialAppState;
  }
  