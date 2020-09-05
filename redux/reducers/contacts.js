import {
  UPDATE_CONTACTS,
  ADD_NEW_CONTACT,
  DELETE_CONTACT,
  TOGGLE_LIKE_CONTACT,
} from "../types/contacts";
const initial = {
  contacts: [
    // {
    //   name: "John Doe",
    //   phone: "08099992876",
    //   isFavorite: true,
    // },
    // {
    //   name: "Mary Lee",
    //   phone: "07016836284",
    //   isFavorite: false,
    // },
    // {
    //   name: "Daniella",
    //   phone: "09024532886",
    //   isFavorite: false,
    // },
    // {
    //   name: "Dray",
    //   phone: "08725392829",
    //   isFavorite: true,
    // },
    // {
    //   name: "Jordan",
    //   phone: "09072439182",
    //   isFavorite: false,
    // },
    // {
    //   name: "Ray",
    //   phone: "06045629875",
    //   isFavorite: true,
    // },
  ],
};

const contactsReducer = (state = initial, action) => {
  switch (action.type) {
    case UPDATE_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      };

    case ADD_NEW_CONTACT: {
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    }

    case DELETE_CONTACT: {
      const phone = action.payload;
      const newContacts = state.contacts.filter((item) => {
        if (item.phone === phone) {
          return false;
        }
        return true;
      });
      return {
        ...state,
        contacts: newContacts,
      };
    }

    case TOGGLE_LIKE_CONTACT: {
      const phone = action.payload.phone;
      const value = action.payload.value;
      const newContacts = state.contacts.map((item) => {
        if (item.phone === phone) {
          return {
            ...item,
            isFavorite: value,
          };
        }
        return item;
      });
      return {
        ...state,
        contacts: newContacts,
      };
    }

    default:
      return state;
  }
};

export default contactsReducer;
