import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser:false, // запрос данных на бекенд
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

    [authOperations.fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true; // запрос данных на бекенд -> true
    },

    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload; // получение данных пользователя 
      state.isLoggedIn = true; // пользователь залогинен
      state.isFetchingCurrentUser = false; // запрос данных на бекенд -> false так как уже fulfilled
    },

    [authOperations.fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false; // запрос данных на бекенд -> false потому что rejected
    },

  },
});

export const authReducer = authSlice.reducer;