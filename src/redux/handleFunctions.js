import { Notify } from 'notiflix';

export const userHandleSignUpFulfilled = (state, { payload }) => {
  state.user = {...payload.user}
    state.token = payload.token;
    state.isLoggedIn = true;
    Notify.success('You have been registered successful');
  };
  
  export const userHandleSignUpRejected = () => {
    Notify.failure('Oops, this email is already registered, try Log In!');
  };
  
  export const userHandleLogInFulfilled = (state, { payload }) => {
    state.token = payload.token;
    state.isLoggedIn = true;
    state.error = null;
    Notify.success('WELCOME!');
  };
  
  export const userHandleLogInRejected = () => {
    Notify.failure('Oops, your email or password is incorrect, try again!');
  };
  
  export const userHandleGetUserFulfilled = (state, { payload }) => {
    state.currentUser = payload.data;
    state.isLoading = false;
  };
  
  export const userLogOutFulfilled = state => {
    state.isLoggedIn = false;
    state.token = null;
    state.currentUser = null;
  };