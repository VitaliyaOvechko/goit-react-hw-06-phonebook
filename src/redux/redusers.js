import ACTIONS from './constants';

const contactsInitialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

export const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case ACTIONS.FORM_SUBMIT:
      const newContact = state.contacts.find(
        contact => data.name === contact.name
      );
      const data = action.payload;
      // ? alert(`${newContact.name} is already in contacts`)
      return [...state, newContact];
    case ACTIONS.DELETE_CONTACT:
      const id = action.payload;
      return [state.contacts.filter(contact => contact.id !== id)];
    default:
      return state;
  }
};

const filtersInitialState = {
  searchQuery: '',
};

export const filterReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_SEARCH_QUERY:
      return { searchQuery: action.payload };

    default:
      return state;
  }
};
