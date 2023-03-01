import { useSelector, useDispatch } from 'react-redux';
import { filterChange } from 'redux/filtersSlice';
import { getFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilter = event => {
    dispatch(filterChange(event.currentTarget.value));
  };

    return (
      <label>
        <p>Find contacts by name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={filter}
          onChange={handleFilter}
        />
      </label>
    );
  };
  
  export default Filter;