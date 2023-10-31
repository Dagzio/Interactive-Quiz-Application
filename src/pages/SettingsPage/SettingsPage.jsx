import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser} from '../../redux/selectors';
import icon from '../../img/symbol-defs.svg'
import { StyledAvatar, AvatarDefault, AddAvatar } from './SettingsPage.styled';

const SettingsPage = () => {

    const dispatch = useDispatch();
    const {setValue} = useForm();
    const stateUser = useSelector(selectUser);

    const [selectedImage, setSelectedImage] = useState(null || stateUser.avatarUrl);
  const [isFormDirty, setIsFormDirty] = useState(false);

    const handleAvatarUpload = event => {
        
        setValue('avatar', event.currentTarget.files[0]);
        setIsFormDirty(true);
        const file = event.currentTarget.files[0];
        if (file) {
          const imageUrl = URL.createObjectURL(file);
          setSelectedImage(imageUrl);
        }
      };

    return <Container>
      <FormContainer onSubmit={handleSubmit}>
        <StyledAvatar>
          {selectedImage ? (
            <img src={selectedImage} alt="Avatar" />
          ) : (
            <AvatarDefault>
                <use href={icon +'#icon-user'}/>
            </AvatarDefault>
          )}
        </StyledAvatar>

        <Label htmlFor="avatar">
          <input
            id="avatar"
            name="avatar"
            type="file"
            onChange={handleAvatarUpload}
            style={{ display: 'none' }}
            accept="image/png, image/jpeg"
          />
          <AddAvatar>
            <use href={icon + '#icon-plus'}/>
          </AddAvatar>
        </Label>

        <Heading>{stateUser.name}</Heading>

        <Title>User</Title>

        <Wrapper>
          <WrapperInput>
            <Label
              htmlFor="name"
              isTouched={touched.name}
              hasError={errors.name}
            >
              User Name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="User Name"
              value={values.name || ''}
              onChange={handleInputChange}
              onBlur={handleBlur}
              isTouched={touched.name}
              hasError={errors.name}
            />
            {errors.name && touched.name && (
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
            ) : null}
          </WrapperInput>
         
          {/*  email */}
          <WrapperInput>
            <Label
              htmlFor="email"
              isTouched={touched.email}
              hasError={errors.email}
            >
              Email
            </Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={values.email || ''}
              onChange={handleInputChange}
              onBlur={handleBlur}
              isTouched={touched.email}
              hasError={errors.email}
            />
            {errors.email && touched.email && (
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
            ) : null}
          </WrapperInput>
          {/*  phone */}
          <WrapperInput>
            <Label
              htmlFor="phone"
              isTouched={touched.phone}
              hasError={errors.phone}
            >
              Phone
            </Label>
            <Input
              id="phone"
              type="tel"
              name="phone"
              placeholder="38 (097) 256 34 77"
              inputMode="numeric"
              value={values.phone || ''}
              onChange={handlePhoneNumberChange}
              onBlur={handleBlur}
              isTouched={touched.phone}
              hasError={errors.phone}
            />
            {errors.phone && touched.phone && (
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
            ) : null}
          </WrapperInput>
          {/*  skype */}
          <WrapperInput>
            <Label
              htmlFor="skype"
              isTouched={touched.skype}
              hasError={errors.skype}
            >
              Skype
            </Label>
            <Input
              placeholder="Add skype number"
              id="skype"
              name="skype"
              value={values.skype || ''}
              onChange={handleInputChange}
              onBlur={handleBlur}
              isTouched={touched.skype}
              hasError={errors.skype}
            />
            {errors.skype && touched.skype && (
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
            ) : null}
          </WrapperInput>
        </Wrapper>
        <Button disabled={isSubmitting || !isFormDirty} type="submit">
          {isSubmitting ? 'Submitting...' : 'Save changes'}
        </Button>
      </FormContainer>
    </Container>
}

