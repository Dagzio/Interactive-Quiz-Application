import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import {string, object} from 'yup';
import { userRegister } from '../../redux/user/userOperations';
import {
  RegisterLabel,
  RegisterForm,
  SignUp,
  EmailInput,
  NameInput,
  PasswordInput,
} from './RegisterPage.styled';
import { selectIsLoading } from 'redux/selectors';

const RegisterSchema = object({
    name: string().min(3).required(),
    email: string().email('Please write a correct email').required(),
    password: string().min(6).required(),
  })
  .required();



const RegisterPage = () => {
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(RegisterSchema),
  });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const handleChange = setState => e => {
    setState(e.target.value);
  };

  const onUserFormSubmit = () => {
    dispatch(userRegister({ name, email, password }));
    reset({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <RegisterForm onSubmit={handleSubmit(onUserFormSubmit)}>
      <RegisterLabel>
        Name
        <NameInput
          type="text"
          {...register('name')}
          onChange={handleChange(setName)}
          value={name}
          id="userName"
          placeholder="For example: Jacob Mercer"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        ></NameInput>
      </RegisterLabel>

      <RegisterLabel>
        Email
        <EmailInput
          type="email"
          {...register('email')}
          onChange={handleChange(setEmail)}
          value={email}
          id="userEmail"
          required
        ></EmailInput>
      </RegisterLabel>

      <RegisterLabel>
        Password
        <PasswordInput
          type="password"
          {...register('password')}
          onChange={handleChange(setPassword)}
          value={password}
          id="userPassword"
          required
        ></PasswordInput>
      </RegisterLabel>
      <SignUp type="submit">Sign Up</SignUp>
    </RegisterForm>
  );
};

export default RegisterPage;
