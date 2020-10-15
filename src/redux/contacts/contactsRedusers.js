import { combineReducers } from 'redux';
import {createReducer} from '@reduxjs/toolkit';
import contactsActions from './contactsActions';

const addContact = (state, action) => {
  return [action.payload, ...state]
};
const fetchContacts = (_, action) => action.payload;

const removeContact = (state, action) => {
 return state.filter(contact => contact.id !== action.payload)
};

const filterContact = (_, action) => action.payload;

const contactsReducers = createReducer([], {
  [contactsActions.addContactSuccess]: addContact,
  [contactsActions.removeContactSuccess]: removeContact,
  [contactsActions.fetchContactsSuccess]: fetchContacts,
})

const filterReducer = createReducer('', {
  [contactsActions.filterContact]: filterContact,
})

const loading = createReducer(false, {
  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactError]: () => false,
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,
  [contactsActions.removeContactRequest]: () => true,
  [contactsActions.removeContactSuccess]: () => false,
  [contactsActions.removeContactError]: () => false,
})

export default combineReducers({
  items: contactsReducers,
  filter: filterReducer,
  loading,
});
