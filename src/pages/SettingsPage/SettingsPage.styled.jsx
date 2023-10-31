import styled from "styled-components";

export const StyledAvatar = styled.div`
  width: 72px;
  height: 72px;
  position: absolute;
  left: calc(50% - 36px);
  top: -36px;
  fill: rgba(62, 133, 243, 0.18);
  background-color: white;
  border: 2px solid #3e85f3;

  border-radius: 50%;

  @media (min-width: 768px) {
    position: static;
    width: 124px;
    height: 124px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 20px;
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
  left: calc(50% - 25px);
  top: 5px;
  width: 50px;
  height: 50px;

  @media (min-width: 768px) {
    left: calc(50% - 47px);
    top: 45px;
    width: 95px;
    height: 95px;
  }

  @media (min-width: 1440px) {
    left: calc(50% - 47px);
    top: 65px;
    width: 95px;
    height: 95px;
  }
`;

export const AddAvatar = styled.svg`
  position: absolute;
  left: 53%;
  top: 28px;
  width: 14px;
  height: 14px;
  font-size: 12px;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
    top: 147px;
    left: 52%;
  }

  @media (min-width: 1440px) {
    top: 170px;
    left: 51%;
  }
`;