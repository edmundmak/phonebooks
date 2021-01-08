import { EPhoneBookActions, PhoneBookActions } from '../actions/phonebook.actions';
import { initialPhoneBookState, IPhoneBookState } from '../state/phonebook.state';

export const phonebookReducers = (
  state = initialPhoneBookState,
  action: PhoneBookActions
): IPhoneBookState => {
  debugger;
  switch (action.type) {
    case EPhoneBookActions.GetPhoneBooksSuccess: {
      debugger;
      return {
        ...state,
         phonebooks:action.payload, phoneBookName:action.phoneBookName,
        message:action.message, success:action.success
      };
    }
    case EPhoneBookActions.CreatePhoneBook: {
        return {
          ...state,
          phonebooks: action.payload
        };
      }
      case EPhoneBookActions.CreatePhoneBookSuccess: {
        return {
          ...state,
          createphoneBook: action.payload, 
        };
      }
    default:
      return state;
  }
};
