import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'hhttps://backend-interactive-quiz.onrender.com';

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
      dispatch(userLogOut());
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
