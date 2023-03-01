import css from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { Formik, Field } from 'formik';
import { getContacts } from 'redux/selectors';

const initialValues = {
  name: '',
  number: '',
};

const Form = () => {
  const dispatch = useDispatch();
 
  const contacts = useSelector(getContacts);
  // const handleFormSubmit = ({ name, number }, { resetForm }) => {
  //   if (
  //     contacts.find(option => option.name.toLowerCase() === name.toLowerCase())
  //   ) {
  //     return  alert('Contact is in phonebook');
  //   }
  //   dispatch(addContact( name, number ));
  //   resetForm();
  // };
  const handleFormSubmit = ({ name, number }, { resetForm }) => {
    if (
      contacts.find(option => option.name.toLowerCase() === name.toLowerCase())
    ) {
      return alert(`${name} is already in contacts`);
    }
    dispatch(addContact(name, number));
    resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
      <form className={css.phonebook}>
        <label>
          <p>Name</p>
          <Field type="text" name="name" />
        </label>
        <label>
          <p>Number</p>
          <Field type="tel" name="number" />
        </label>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    </Formik>
  );
};

export default Form;
