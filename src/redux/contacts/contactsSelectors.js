const getContacts = state => state.contacts.items;

const getIsLoadingContacts = state => state.contacts.loading;

const getFiltredContacts = state => {
  const { items, filter } = state.contacts;
  const normalizedFilter = filter.toLowerCase();

  const visibleContacts = items.filter(item =>
    item.name.toLowerCase().includes(normalizedFilter),
  );
  return visibleContacts;
};

const getContact = (state, id) =>
  state.contacts.items.find(contact => contact.id === id);

export default {
  getContacts,
  getIsLoadingContacts,
  getFiltredContacts,
  getContact,
};