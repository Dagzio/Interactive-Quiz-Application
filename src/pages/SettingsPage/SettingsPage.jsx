import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/selectors';
import { updateUserData } from 'redux/user/userOperations';
import {
  StyledAvatar,
  AddAvatar,
  UserProfileForm,
  UserProfileLabel,
  UserProfileTitle,
  UserProfileInput,
  Wrapper,
  UserProfileBtn,
} from './SettingsPage.styled';
import icon from '../../img/symbol-defs.svg';

const SettingsPage = () => {
  const dispatch = useDispatch();
  const stateUser = useSelector(selectUser);

  //INITIAL FORM VALUES 
  const { register, setValue, handleSubmit, getValues } = useForm({
    defaultValues: {
      avatar: null,
      name: stateUser.name,
      email: stateUser.email,
      phone: stateUser.phone,
      skype: stateUser.skype,
    },
  });

  useEffect(() => {
    setValue('name', stateUser.name);
    setValue('email', stateUser.email);
    setValue('phone', stateUser.phone);
    setValue('skype', stateUser.skype);

    setSelectedImage(stateUser.avatarUrl || null);
  }, [stateUser, setValue]);

  //LOCAL STATE
  const [selectedImage, setSelectedImage] = useState(stateUser.avatarUrl || null);
  const [isDirty, setIsDirty] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  //FUNCTIONS
  //VALIDATION FROMAT PHONE
  const formatPhoneNumber = value => {
    const phoneNumber = value.replace(/[^\d]/g, '');
    const countryCode = phoneNumber.slice(0, 2);
    const areaCode = phoneNumber.slice(2, 5);
    const firstPart = phoneNumber.slice(5, 8);
    const secondPart = phoneNumber.slice(8, 10);
    const thirdPart = phoneNumber.slice(10, 12);
    let formattedPhoneNumber = countryCode;
    if (areaCode) {
      formattedPhoneNumber += ` (${areaCode})`;
    }
    if (firstPart) {
      formattedPhoneNumber += ` ${firstPart}`;
    }
    if (secondPart) {
      formattedPhoneNumber += ` ${secondPart}`;
    }
    if (thirdPart) {
      formattedPhoneNumber += ` ${thirdPart}`;
    }
    return formattedPhoneNumber.trim();
  };

  const handlePhoneNumberChange = event => {
    const formattedPhoneNumber = formatPhoneNumber(event.target.value);
    setValue('phone', formattedPhoneNumber);
    setIsDirty(true);
  };

  const handleInputChange = ({ target: { name, value } }) => {
    console.log(name, value);
    setValue(name, value);
    setIsDirty(true);
  };

  const handleAvatarUpload = event => {
    const file = event.currentTarget.files[0];
    setValue('avatar', event.currentTarget.files[0]);
    setIsDirty(true);

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      console.log(imageUrl);
      setSelectedImage(imageUrl);
    }
  };

  const onFormSubmit = () => {
    const formData = getValues();
    try {
      setIsSubmitting(true);
      dispatch(updateUserData(formData));
      setIsDirty(false);
      setIsSubmitting(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <UserProfileForm onSubmit={handleSubmit(onFormSubmit)}>
      {/*  avatar */}
      <StyledAvatar>
        {selectedImage && <img src={selectedImage} alt="Avatar" />}
      </StyledAvatar>

      <UserProfileLabel>
        <UserProfileInput
          {...register('avatar')}
          id="avatar"
          type="file"
          onChange={handleAvatarUpload}
          style={{ display: 'none' }}
          accept="image/png, image/jpeg"
        />
        <AddAvatar>
          <use href={icon + '#icon-plus'} />
        </AddAvatar>
      </UserProfileLabel>

      <UserProfileTitle>{stateUser.name}</UserProfileTitle>

      {/*  name */}
      <Wrapper>
        <UserProfileLabel>
          User Name
          <UserProfileInput
            {...register('name')}
            id="name"
            type="text"
            placeholder={stateUser.name}
            onChange={handleInputChange}
          />
        </UserProfileLabel>

        {/*  email */}
        <UserProfileLabel>
          Email
          <UserProfileInput
            {...register('email')}
            id="email"
            type="email"
            placeholder={stateUser.email}
            onChange={handleInputChange}
          />
        </UserProfileLabel>

        {/*  phone */}
        <UserProfileLabel>
          Phone
          <UserProfileInput
            {...register('phone')}
            id="phone"
            type="tel"
            placeholder="For example: 12 (345) 678 90 12"
            inputMode="numeric"
            onChange={handlePhoneNumberChange}
          />
        </UserProfileLabel>

        {/*  skype */}
        <UserProfileLabel>
          Skype
          <UserProfileInput
            {...register('skype')}
            placeholder={stateUser.skype || ''}
            id="skype"
            onChange={handleInputChange}
          />
        </UserProfileLabel>
      </Wrapper>
      <UserProfileBtn disabled={isSubmitting || !isDirty} type="submit">
        {isSubmitting ? 'Submitting...' : 'Save changes'}
      </UserProfileBtn>
    </UserProfileForm>
  );
};

export default SettingsPage;
