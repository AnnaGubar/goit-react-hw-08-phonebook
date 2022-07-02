import { createSlice } from '@reduxjs/toolkit';
import { getContactsRequest, addContactRequest, deleteContactRequest } from './contacts-operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    entities: [],
    filter: '',
  },
  
  reducers: {
    setFilterReducer(state, action) {
      state.filter = action.payload;
    },
  },

  extraReducers: {
    [getContactsRequest.fulfilled]: (state, { payload }) => {
      state.entities = payload;
    },

    [addContactRequest.fulfilled]: (state, { payload }) => {
      state.entities.push(payload);
    },

    [deleteContactRequest.fulfilled]: (state, { payload }) => {
      state.entities = state.entities.filter(item => item.id !== payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { setFilterReducer } = contactsSlice.actions;