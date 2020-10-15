import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('contacts/addRequest');
const addContactSuccess = createAction('contacts/addSuccess');
const addContactsError = createAction('contacts/addError');

const fetchContactsRequest = createAction('contacts/fetchRequest');
const fetchContactsSuccess = createAction('contacts/fetchSuccess');
const fetchContactsError = createAction('contacts/fetchError');

const removeContactRequest = createAction('contact/removeRequest');
const removeContactSuccess = createAction('contact/removeSuccess');
const removeContactError = createAction('contact/removeError');

const removeContact = createAction('contacts/remove');
const filterContact = createAction('contacts/filter');

export default {
  addContactRequest,
  addContactSuccess,
  addContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  removeContact,
  filterContact,

};
