import css from './App.module.css';
import ContactsList from './ContactsList/ContactsList';
import AddForm from './Form/Form';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export default function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const normalizedFilter = filter.toLowerCase();
  const showFilteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div className={css.container}>
      <div>
        <h1>Phonebook</h1>
        <AddForm />

        <h2>Contacts</h2>

        {showFilteredContacts.length > 0 || filter ? (
          <Filter />
        ) : (
          <p>No contacts added</p>
        )}

        <ContactsList contactList={showFilteredContacts} />
      </div>
    </div>
  );
}
