import css from './App.module.css';
import ContactsList from './ContactsList/ContactsList';
import AddForm from './Form/Form';
import Filter from './Filter/Filter';

export default function App() {

  return (
    <div className={css.container}>
      <div>
        <h1>Phonebook</h1>
        <AddForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    </div>
  );
}
