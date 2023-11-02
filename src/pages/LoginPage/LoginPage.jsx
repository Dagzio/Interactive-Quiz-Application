import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import {string, object} from 'yup';
import { userLogIn } from '../../redux/user/userOperations';
import {
  LogIn,
  LogInForm,
  LogInInput,
  LogInPasswordInput,
  LogInLabel,
} from './LoginPage.styled';

const LogInSchema = object({
    email: string().email('Please write a correct email').required(),
    password: string().min(6).required(),
  })
  .required();



const LoginPage = () => {
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(LogInSchema),
  });
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
        />
      </LogInLabel>

      <LogInLabel>
        Password
        <LogInPasswordInput
          type="password"
          {...register('password')}
          onChange={handleChange(setPassword)}
          value={password}
          id="userPassword"
          required
        />
      </LogInLabel>

      <LogIn type="submit">Log In</LogIn>
    </LogInForm>
  );
};

export default LoginPage;
