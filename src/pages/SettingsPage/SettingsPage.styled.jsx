import { NameInput, RegisterLabel } from "pages/RegisterPage/RegisterPage.styled";
import styled from "styled-components";

export const UserProfileForm = styled.form`
display: flex;
align-items:center;
// justify-content:center;
flex-direction: column;
`;

export const UserProfileLabel = styled(RegisterLabel)``;

export const UserProfileInput = styled(NameInput)`
display: block;
margin-bottom:0;
min-width:270px;
@media (min-width: 768px){
  min-width:270px;
  
}
`;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
gap: 18px;
justify-content:center;
margin-bottom: 36px;


@media (min-width: 768px) {
  width: 700px;
  flex-direction: row;
  flex-wrap: wrap;
  
  // column-gap: 50px;
  // row-gap: 24px;
}
`;

export const UserProfileTitle = styled.p`
font-weight: 700;
font-size: 14px;
color: #FFF;
margin-bottom: 16px;

@media (min-width:768px){
  margin-bottom: 24px;
}
`;

export const StyledAvatar = styled.div`
  width: 72px;
  height: 72px;
  position: absolute;
  top:80px;
  fill: rgba(62, 133, 243, 0.18);
  background-color: white;
  border: 2px solid #3e85f3;

  border-radius: 50%;

  @media (min-width: 768px) {
    position: static;
    width: 124px;
    height: 124px;
    margin-bottom: 10px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const AvatarDefault = styled.svg`
  position: absolute;
  top:57px;
  left:13%;
  width: 50px;
  height: 50px;

  @media (min-width: 768px) {
    left: calc(50% - 47px);
    top: 208px;
    width: 95px;
    height: 95px;
  }

  @media (min-width: 1440px) {
    left: calc(50% - 47px);
    top: 34%;
    width: 95px;
    height: 95px;
  }
`;

export const AddAvatar = styled.svg`
  position: absolute;
  top: 134px;
  left: 55%;
  width: 24px;
  height: 24px;
  font-size: 12px;
  cursor: pointer;
  fill: #3e85f3;
  transform: translateX(-5%);

  @media (min-width:480px){
    left:53%;
  }

  @media (min-width: 768px) {
    top: 310px;
    left: calc(52% + 5px);
  }

  @media (min-width:1200px){
    left:52% ;
  }

  @media (min-width: 1440px) {
    top: 43%;
    left: calc(51% + 10px);
  }
`;

export const UserProfileBtn = styled.button`
  padding: 14px 50px;
  width: 195px;
  height: 46px;
  font-weight: 600;
  font-size: 14px;

  text-align: center;

  
  border-radius: 16px;
  border: none;

  cursor: ${p => (p.disabled ? 'default' : 'pointer')};

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    color: #FFF;
    background-color: blue;
  }

  @media (min-width: 768px) {
    width: 262px;
    height: 48px;
  }
`;