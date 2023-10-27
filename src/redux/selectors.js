export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsLoading = state => state.auth.isLoading;
export const selectToken = state => state.auth.token;
export const userError = state => state.auth.error;