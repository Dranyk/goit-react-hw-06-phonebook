import css from './ContactsList.module.css';
import ContactItem from './ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getFilter, getContacts } from '../../redux/selectors';

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);
  return (
        <div className={css.contactListContaoner}>
        <ul className={css.contacts}>
          {contacts.length === 0
            ? <p>No add contacts</p>
            : visibleContacts.map(({ id, name, number }) => (
              <ContactItem key={id} id={id} name={name} number={number} />
            ))}
        </ul>
      </div>
  );
};

export default ContactsList;
