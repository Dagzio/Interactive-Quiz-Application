import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { userLogIn } from '../../redux/user/userOperations';
import { LogIn, LogInForm, LogInInput, LogInLabel } from './LoginPage.styled';

const LoginPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = setState => e => {
    setState(e.target.value);
  };

  const onUserLogIn = () => {
    dispatch(
      userLogIn({
        email,
        password,
      })
    );
    reset({
      email: '',
      password: '',
    });
  };

  return (
    <LogInForm onSubmit={handleSubmit(onUserLogIn)}>
      <LogInLabel>
        Email
        <LogInInput
          type="email"
          {...register('email')}
          onChange={handleChange(setEmail)}
          value={email}
          id="userEmail"
          required
        ></LogInInput>
      </LogInLabel>

      <LogInLabel>
        Password
        <LogInInput
          type="password"
          {...register('password')}
          onChange={handleChange(setPassword)}
          value={password}
          id="userPassword"
          required
        ></LogInInput>
      </LogInLabel>

      <LogIn type="submit">Log In</LogIn>
    </LogInForm>
  );
};

export default LoginPage;