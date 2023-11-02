import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://backend-interactive-quiz.onrender.com';

export const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

const LogIn = async userData => {
  const response = await axios.post('auth/login', userData);
  setToken(response.data.token);
  return response;
};

export const userRegister = createAsyncThunk(
  'auth/register',
  async userData => {
    const response = await axios.post('auth/register', userData);
    setToken(response.data.token);
    return response.data;
  }
);

export const getCurrentUser = createAsyncThunk(
  'users/current',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.get('users/current');
      return response;
    } catch (error) {
      // dispatch(userLogOut());
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const userLogIn = createAsyncThunk(
  'auth/login',
  async (userData, { dispatch }) => {
    const { data } = await LogIn(userData);
    dispatch(getCurrentUser());
    return data;
  }
);

export const userLogOut = createAsyncThunk('auth/logout', async () => {
  const result = await axios.post('auth/logout');
  clearToken();
  return result;
});

export const updateUserData = createAsyncThunk(
  'users/edit',
  async ({ avatar, name, email, phone, skype }, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    setToken(persistedToken);

    const formData = new FormData();
    formData.append('avatarUrl', avatar);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone || '');
    formData.append('skype', skype || '');

    try {
      const { data } = await axios.patch('users/edit', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
