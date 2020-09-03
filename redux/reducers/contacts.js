import { UPDATE_CONTACTS, ADD_NEW_CONTACT } from "../types/contacts";
const initial = {
  contacts: [
    {
      name: "John Doe",
      phone: "08099992876",
    },
    {
      name: "Mary Lee",
      phone: "07016836284",
    },
    {
      name: "Daniella",
      phone: "09024532886",
    },
    {
      name: "Dray",
      phone: "08725392829",
    },
    {
      name: "Jordan",
      phone: "09072439182",
    },
    {
      name: "Ray",
      phone: "06045629875",
    },
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
    default:
      return state;
  }
};

export default contactsReducer;
