import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getContactsRequest = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addContactRequest = createAsyncThunk(
  'contacts/addContact',
  async values => {
    try {
      const { data } = await axios.post('/contacts', values);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteContactRequest = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      console.log(error);
    }
  }
);
