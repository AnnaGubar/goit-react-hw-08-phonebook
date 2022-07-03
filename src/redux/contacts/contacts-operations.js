import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const getContactsRequest = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    try {

      const { data } = await axios.get('/contacts', {
        headers: {
          Authorization: persistedToken,
        },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addContactRequest = createAsyncThunk(
  'contacts/addContact',
  async (values) => {
    try {
      const { data } = await axios.post('/contacts', values, {
        headers: {
          Authorization: token,
        },
      });

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteContactRequest = createAsyncThunk(
  'contacts/deleteContact',
  async (id) => {
try {
      await axios.delete(`/contacts/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      return id;
    } catch (error) {
      console.log(error);
    }
  }
);
