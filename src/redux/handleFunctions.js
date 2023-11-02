import { Notify } from 'notiflix';

export const userHandlePending = state => {
  state.isLoading = true;

};

export const userHandleSignUpFulfilled = (state, { payload }) => {
    state.token = payload.token;
    state.user = payload.data
    state.isLoggedIn = true;
    state.isLoading = false;
    Notify.success('You have been registered successful');
  };
  
  export const userHandleSignUpRejected = (state) => {
    
    state.isLoggedIn = false;
    state.isLoading = false;
    state.error = true;
    Notify.failure('This email is already registered, try Log In!');
  };
  
  export const userHandleLogInFulfilled = (state, { payload }) => {
    state.token = payload.token;
    state.isLoading = false;
    state.isLoggedIn = true;
    state.error = null;
    Notify.success('WELCOME!');
  };
  
  export const userHandleLogInRejected = state => {
    state.isLoading = false;
    Notify.failure('Oops, your email or password is incorrect, try again!');
  };
  
  export const userHandleGetUserFulfilled = (state, { payload }) => {
    state.isLoggedIn = true;
    state.user = payload.data;
    state.isLoading = false;
  };

  export const userHandleGetUserRejected = state => {
    state.isLoggedIn = false;
    state.isLoading = false;
    state.error = true;
    state.token = null;
  }
  
  export const userLogOutFulfilled = state => {
    state.isLoggedIn = false;
    state.token = null;
    state.user = null;
    state.isLoading = false;
  };


  export const userHandleUpdateDataFulfilled = state => {
    state.isLoading = false;
    state.isLoggedIn = true;
    Notify.success('Your info has been successfuly updated!');

  };