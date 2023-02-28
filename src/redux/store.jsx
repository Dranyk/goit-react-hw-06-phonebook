import { configureStore, createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'phonebook',
  storage,
  whitelist: ['contacts'],
};

const startData = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const myContacts = createSlice({
  name: 'contacts',
  initialState: {
    contacts: startData,
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      if (
        state.contacts.some(
          ({ name }) => name.toLowerCase() === action.payload.name.toLowerCase()
        )
      ) {
        alert('Contact is in phonebook');
      } else {
        const newContact = {
          id: nanoid(),
          name: action.payload.name,
          number: action.payload.number,
        };
        state.contacts.push(newContact);
      }
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
    },
    filterChange: (state, action) => {
      state.filter = action.payload;
    },
  },
});

const persistedReducer = persistReducer(persistConfig, myContacts.reducer);

export const { addContact, deleteContact, filterChange } = myContacts.actions;

export const store = configureStore({
  reducer: { contacts: persistedReducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
