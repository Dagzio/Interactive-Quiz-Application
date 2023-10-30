import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { userRegister } from '../../redux/user/userOperations';
import {
  RegisterLabel,
  RegisterForm,
  SignUp,
  EmailInput,
  NameInput,
  PasswordInput,
} from './RegisterPage.styled';

const RegisterPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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