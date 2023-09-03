import ACTIONS from './constants';

export const formSubmit = data => {
  return {
    type: ACTIONS.FORM_SUBMIT,
    payload: data,
  };
};

export const deleteContact = id => {
  return {
    type: ACTIONS.DELETE_CONTACT,
    payload: id,
  };
};

//FILTERS

export const changeFilter = searchQuery => {
  return {
    type: ACTIONS.CHANGE_SEARCH_QUERY,
    payload: searchQuery,
  };
};
