import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { string, object } from 'yup';
import { userError } from 'redux/selectors';
import { userRegister } from '../../redux/user/userOperations';
import {
  RegisterLabel,
  RegisterForm,
  SignUp,
  EmailInput,
  NameInput,
  PasswordInput,
} from './RegisterPage.styled';
import { Notify } from 'notiflix';

//VALIDATION SCHEMA
const RegisterSchema = object({
  name: string()
    .min(3, 'Name must be at least 3 characters')
    .required('Name is required'),
  email: string()
    .email('Please write a correct email')
    .required('Email is required'),
  password: string()
    .min(6)
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .required('Password is required'),
});

const RegisterPage = () => {
  //LOCAL STATE
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const stateError = useSelector(userError);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterSchema),
  });

  useEffect(() => {
    if (stateError) {
      Notify.failure('Email or password is Invalid');
    }
  }, [stateError]);

  //FUNCTIONS
  const handleChange = setState => e => {
    setState(e.target.value);
  };

  const onUserFormSubmit = async () => {
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
        />
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
        />
      </RegisterLabel>

      <RegisterLabel>
        Password
        <PasswordInput
          type="password"
          {...register('password', {
            minLength: {
              value: 6,
              message: 'Min 6',
            },
          })}
          onChange={handleChange(setPassword)}
          value={password}
          id="userPassword"
          required
        />
        {errors.password && (
          <span>{Notify.failure(errors.password.message)}</span>
        )}
      </RegisterLabel>
      <SignUp type="submit">Sign Up</SignUp>
    </RegisterForm>
  );
};

export default RegisterPage;
