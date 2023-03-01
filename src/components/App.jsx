import css from './App.module.css';
import ContactsList from './ContactsList/ContactsList';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux';

export default function App() {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  console.log(contacts, 'Контакты');
  const normalizedFilter = filter.toLowerCase();
  const showFilteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div className={css.container}>
      <div>
        <h1>Phonebook</h1>
        <Form />

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
