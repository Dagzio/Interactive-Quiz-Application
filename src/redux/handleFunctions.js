import { Notify } from 'notiflix';

export const userHandlePending = state => {
  state.isLoading = true;
};

export const userHandleSignUpFulfilled = (state, { payload }) => {
    state.user = payload.data
    state.isLoading = true;
    state.token = payload.token;
    state.isLoggedIn = true;
    Notify.success('You have been registered successful');
  };
  
  export const userHandleSignUpRejected = () => {
    Notify.failure('This email is already registered, try Log In!');
  };
  
  export const userHandleLogInFulfilled = (state, { payload }) => {
    state.token = payload.token;
    state.isLoading = false;
    state.isLoggedIn = true;
    state.error = null;
    Notify.success('WELCOME!');
  };
  
  export const userHandleLogInRejected = () => {
    Notify.failure('Oops, your email or password is incorrect, try again!');
  };
  
  export const userHandleGetUserFulfilled = (state, { payload }) => {
    state.user = payload.data;
    state.isLoading = false;
  };
  
  export const userLogOutFulfilled = state => {
    state.isLoggedIn = false;
    state.token = null;
    state.user = null;
  };