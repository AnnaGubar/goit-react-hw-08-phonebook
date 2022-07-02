import { createSlice } from '@reduxjs/toolkit';
import { getContactsRequest, addContactRequest, deleteContactRequest } from './contacts-operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    entities: [],
    filter: '',
    status: null,
    error: null,
  },
  reducers: {
    setFilterReducer(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    // GET
    // [getContacts.pending]: state => {
    //   state.status = 'loading';
    //   state.error = null;
    // },

    [getContactsRequest.fulfilled]: (state, { payload }) => {
      // state.status = 'resolved';
      state.entities = payload;
    },

    // [getContacts.rejected]: (state, { payload }) => {
    //   state.status = 'rejected';
    //   state.error = payload;
    // },

    // ADD
    // [addContact.pending]: state => {
    //   state.status = 'addLoading';
    //   state.error = null;
    // },

    [addContactRequest.fulfilled]: (state, { payload }) => {
      // state.status = 'addResolved';
      state.entities.push(payload);
    },

    // [addContact.rejected]: (state, { payload }) => {
    //   state.status = 'addRejected';
    //   state.error = payload;
    // },
    
    // DELETE
    // [deleteContact.pending]: state => {
    //   state.status = 'deleteLoading';
    //   state.error = null;
    // },

    [deleteContactRequest.fulfilled]: (state, { payload }) => {
      // state.status = 'deleteResolved';
      state.entities = state.entities.filter(item => item.id !== payload);
    },

    // [deleteContact.rejected]: (state, { payload }) => {
    //   state.status = 'deleteRejected';
    //   state.error = payload;
    // },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { setFilterReducer } = contactsSlice.actions;