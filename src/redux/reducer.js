import { userReducer } from './user/userSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isLoggedIn'],
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const reducer = {
  user: persistedReducer,
};
