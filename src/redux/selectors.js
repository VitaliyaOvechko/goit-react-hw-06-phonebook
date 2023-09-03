export const getVisibleContacts = state => {
  const { searchQuery } = state.filters;
  const { contacts } = state.contacts;

  const normalizedFilter = searchQuery.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
