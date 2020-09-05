import {
  UPDATE_CONTACTS,
  ADD_NEW_CONTACT,
  DELETE_CONTACT,
  TOGGLE_LIKE_CONTACT,
} from "../types/contacts";
export const updateContacts = (contacts) => ({
  type: UPDATE_CONTACTS,
  payload: contacts,
});

export const addNewContact = (contact) => ({
  type: ADD_NEW_CONTACT,
  payload: contact,
});

export const deleteContact = (phone) => ({
  type: DELETE_CONTACT,
  payload: phone,
});

export const toggleLikeContact = (phone, value) => ({
  type: TOGGLE_LIKE_CONTACT,
  payload: {
    phone,
    value,
  },
});
