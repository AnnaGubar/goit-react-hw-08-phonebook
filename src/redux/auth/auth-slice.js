import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {

    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user; //получены данные пользователя
      state.token = action.payload.token; // получен токен
      state.isLoggedIn = true; // пользователь залогинился
    },

    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user; //получены данные пользователя
      state.token = action.payload.token; // получен токен
      state.isLoggedIn = true; // пользователь залогинился
    },

    [authOperations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null }; // данные пользователя очищены
      state.token = null; // токен пустой
      state.isLoggedIn = false; // пользователь разлогинился
    },

    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },

  },
});

export default authSlice.reducer;