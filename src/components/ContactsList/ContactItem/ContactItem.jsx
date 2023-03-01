import css from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDelete = id => {
    dispatch(deleteContact(id));
  };

    return (
      <li className={css.li}>
        <p>
          {name}: {number}
        </p>
        <button className={css.button} type="button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </li>
    );
  };
  
  export default ContactItem;