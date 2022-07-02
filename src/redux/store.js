import { configureStore} from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contacts-slice';
import { authReducer } from './auth/auth-slice';

// сохранение токена для рефреша (перезагрузка страницы)
import storage from 'redux-persist/lib/storage';
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


// сохранение токена для рефреша (перезагрузка страницы)
const defaultMiddleware = {
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
};

// сохранение токена для рефреша (перезагрузка страницы)
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(defaultMiddleware),
});

export const persistor = persistStore(store);