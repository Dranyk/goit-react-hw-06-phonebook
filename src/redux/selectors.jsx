export const getContacts = store => store.contacts;

export const getFilterContacts  = ({ contacts, filter }) => {
  if (!filter) {
    return contacts;
  }
  const normalizedFilter =  filter.toLowerCase();
  const result = contacts.filter(({ name, number }) => {
    return (name.toLowerCase().includes(normalizedFilter) ||
      number.includes(normalizedFilter))
  });

  return result;
};

export const getFilter = ({ filter }) => filter;