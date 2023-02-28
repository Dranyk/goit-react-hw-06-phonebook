import css from './ContactsList.module.css';
import ContactItem from './ContactItem/ContactItem';

const ContactsList = ({ contactList }) => (
  <ul className={css.contacts}>
    {contactList.map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))}
  </ul>
);



export default ContactsList;