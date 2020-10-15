import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import contactsRedusers from './contacts/contactsRedusers';
import authRedusers from './auth/authReducers';
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

  const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
  };

export const store = configureStore({
    reducer: {
        contacts: contactsRedusers,
        auth: persistReducer(authPersistConfig, authRedusers)
    },
    middleware: getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
});

export const persistor = persistStore(store);