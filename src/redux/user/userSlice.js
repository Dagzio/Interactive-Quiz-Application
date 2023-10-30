import { createSlice } from '@reduxjs/toolkit';
import {
  getCurrentUser,
  userLogIn,
  userLogOut,
  userRegister,
} from './userOperations';
import {
  userHandleLogInFulfilled,
  userHandleLogInRejected,
  userHandleSignUpFulfilled,
  userHandleSignUpRejected,
  userHandleGetUserFulfilled,
  userLogOutFulfilled,
} from '../handleFunctions';
import userInitialState from './userInitialState';

const userSlice = createSlice({
  name: 'users',
  initialState: userInitialState,
  extraReducers: builder => {
    builder
      .addCase(userRegister.fulfilled, userHandleSignUpFulfilled)
      .addCase(userRegister.rejected, userHandleSignUpRejected)
      .addCase(userLogIn.fulfilled, userHandleLogInFulfilled)
      .addCase(userLogIn.rejected, userHandleLogInRejected)
      .addCase(getCurrentUser.fulfilled, userHandleGetUserFulfilled)
      .addCase(userLogOut.fulfilled, userLogOutFulfilled);
  },
});

export const userReducer = userSlice.reducer;