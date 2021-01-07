import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IPhoneBookState } from '../state/phonebook.state';

const selectPhoneBooks = (state: IAppState) => state.phonebooks;

export const selectPhoneBookList = createSelector(
    selectPhoneBooks,
  (state: IPhoneBookState) => state.phonebooks
);



export const selectSelectedPhoneBook = createSelector(
    selectPhoneBooks,
  (state: IPhoneBookState) => state.selectedPhoneBook
);
