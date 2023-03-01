import { createSlice, nanoid } from '@reduxjs/toolkit';

const startData = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: startData,

  reducers: {
    // addContact(state, action) {
    //   console.log(action.payload);
    //   if (
    //     state.contacts.some(
    //       ({ name }) => name.toLowerCase() === action.payload.name.toLowerCase()
    //     )
    //   ) {
    //     alert('Contact is in phonebook');
    //   } else {
    //     const newContact = {
    //       id: nanoid(),
    //       name: action.payload.name,
    //       number: action.payload.number,
    //     };
    //     state.contacts.push(newContact);
    //   }
    // },
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return { payload: { id: nanoid(), name, number } };
      },
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
