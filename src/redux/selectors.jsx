export const getContacts = Store => Store.contacts;

export const getFilter = ({ contacts, filter }) => {
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
