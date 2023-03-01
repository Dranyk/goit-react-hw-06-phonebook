import css from './Form.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { Formik, Field } from 'formik';

const Form = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    number: '',
  };

  const handleFormSubmit = ({ name, number }, { resetForm }) => {
    console.log(name, number);
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
