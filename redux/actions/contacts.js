import { UPDATE_CONTACTS, ADD_NEW_CONTACT } from "../types/contacts";
export const updateContacts = (contacts) => ({
  type: UPDATE_CONTACTS,
  payload: contacts,
});

export const addNewContact = (contact) => ({
  type: ADD_NEW_CONTACT,
  payload: contact,
});
