import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser} from '../../redux/selectors';
import icon from '../../img/symbol-defs.svg'
import { StyledAvatar, AvatarDefault, AddAvatar, UserProfileForm, UserProfileLabel, UserProfileTitle, UserProfileInput, Wrapper, UserProfileBtn } from './SettingsPage.styled';
import { updateUserData } from 'redux/user/userOperations';

const SettingsPage = () => {

    const dispatch = useDispatch();
    const stateUser = useSelector(selectUser);
    const {register, setValue, handleSubmit, formState:{isDirty, isSubmitting, isSubmitSuccessful}, getValues} = useForm({
      defaultValues: {
        avatar: null,
        name: stateUser.name,
        email: stateUser.email,
        phone: stateUser.phone,
        skype: stateUser.skype,
      }
    });
    

    const [selectedImage, setSelectedImage] = useState(stateUser.avatarUrl || null) ;
  // const [isFormDirty, setIsFormDirty] = useState(false);
  // const [isSubmitting, setIsSubmitting] = useState(false);

    const handleAvatarUpload = event => {
        const file = event.currentTarget.files[0];
        setValue('avatar', event.currentTarget.files[0]);
        // setIsFormDirty(true);
        
        if (file) {
          const imageUrl = URL.createObjectURL(file);
          console.log(imageUrl)
          setSelectedImage(imageUrl);
        }
      };

      const onFormSubmit = () => {
        const formData = getValues();
        console.log(formData);
        try {
          // setIsSubmitting(true);
          dispatch(updateUserData(formData));
          // setIsFormDirty(false);
        } catch (error) {
          console.log(error.message);
        }
      };

      const handleInputChange = event => {
        const { name, value } = event.target;
        setValue(name, value);
        // setIsFormDirty(true);
      };

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
        // setIsFormDirty(true);
      };

    return <UserProfileForm onSubmit={handleSubmit(onFormSubmit)}>
        <StyledAvatar>
          {selectedImage ? (
            <img src={selectedImage} alt="Avatar" />
          ) : (
            <AvatarDefault>
                <use href={icon +'#icon-user'}/>
            </AvatarDefault>
          )}
        </StyledAvatar>

        <label>
          <input
          {...register('avatar')}
            id="avatar"
            type="file"
            onChange={handleAvatarUpload}
            style={{ display: 'none' }}
            accept="image/png, image/jpeg"
          />
          <AddAvatar>
            <use href={icon + '#icon-plus'}/>
          </AddAvatar>
        </label>

        <UserProfileTitle>{stateUser.name}</UserProfileTitle>

        <Wrapper>

            <UserProfileLabel>
              User Name
            
            <UserProfileInput
            {...register('name')}
              id="name"
              type="text"
              placeholder="User Name"
              value={stateUser.name || ''}
              onChange={handleInputChange}
            
            /* {errors.name && touched.name && (
              <ErrorMessage>{errors.name}</ErrorMessage>
            )}
            {errors.name && touched.name ? (
              <Iconinput>
                <use href={Icon + '#EmailError'} />
              </Iconinput>
            ) : touched.name ? (
              <Iconinput>
                <use href={Icon + '#EmailDone'} />
              </Iconinput>
            ) : null} */
            />
            </UserProfileLabel>

         
          {/*  email */}
          
            <UserProfileLabel>
              Email

            <UserProfileInput
            {...register('email')}
              id="email"
              type="email"
              placeholder="Email"
              value={stateUser.email || ''}
              onChange={handleInputChange}
            />
            </UserProfileLabel>
            {/* {errors.email && touched.email && (
              <ErrorMessage>{errors.email}</ErrorMessage>
            )}
            {errors.email && touched.email ? (
              <Iconinput>
                <use href={Icon + '#EmailError'} />
              </Iconinput>
            ) : touched.email ? (
              <Iconinput>
                <use href={Icon + '#EmailDone'} />
              </Iconinput>
            ) : null} */}
          
          {/*  phone */}

            <UserProfileLabel>
              Phone
            
            <UserProfileInput
            {...register('phone')}
              id="phone"
              type="tel"
              placeholder="For example: 38 (012) 345 67 89"
              inputMode="numeric"
              value={stateUser.phone || ''}
              onChange={handlePhoneNumberChange}
              
            />
            {/* {errors.phone && touched.phone && (
              <ErrorMessage>{errors.phone}</ErrorMessage>
            )}
            {errors.phone && touched.phone ? (
              <Iconinput>
                <use href={Icon + '#EmailError'} />
              </Iconinput>
            ) : touched.phone ? (
              <Iconinput>
                <use href={Icon + '#EmailDone'} />
              </Iconinput>
            ) : null} */}
</UserProfileLabel>
          {/*  skype */}

            <UserProfileLabel>
              Skype
            
            <UserProfileInput
              placeholder="Add skype number"
              id="skype"
              name="skype"
              value={stateUser.skype || ''}
              onChange={handleInputChange}
            />
            {/* {errors.skype && touched.skype && (
              <ErrorMessage>{errors.skype}</ErrorMessage>
            )}
            {errors.skype && touched.skype ? (
              <Iconinput>
                <use href={Icon + '#EmailError'} />
              </Iconinput>
            ) : touched.skype ? (
              <Iconinput>
                <use href={Icon + '#EmailDone'} />
              </Iconinput>
            ) : null} */}
   </UserProfileLabel>
        </Wrapper>
        <UserProfileBtn disabled={isSubmitting || isDirty || isSubmitSuccessful} type="submit">
          {isSubmitting ? 'Submitting...' : 'Save changes'}
        </UserProfileBtn>
      </UserProfileForm>

};


export default SettingsPage;

