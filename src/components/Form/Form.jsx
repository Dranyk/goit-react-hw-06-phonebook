import css from './Form.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/store';
import * as yup from 'yup';
import { Formik, Field } from 'formik';

let schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
});

const Form = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

    return (
      <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={handleFormSubmit}
    >
      <form className={css.phonebook}>
        <label>
          <p>Name</p>
          <Field
            type="text"
            name="name"
          />
        </label>
        <label>
          <p>Number</p>
          <Field
            type="tel"
            name="number"
          />
        </label>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
      </Formik>
    );
  }

  export default Form;