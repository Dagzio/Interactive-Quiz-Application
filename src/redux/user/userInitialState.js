const userInitialState = {
  user: {
    email: null,
    _id: null,
    avatarURL: null,
    phone: null,
    skype: null,
    name: null,
    birthday: null,
  },
  token: '',
  isLoggedIn: false,
  isLoading: false,
  error: '',
};

export default userInitialState;
