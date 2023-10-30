import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const Headerbar = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  max-width: 100vw;
  margin: 0 auto;
  padding: 12px 24px;
  z-index: 1100;
  background-color: #fff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const HeaderLink = styled(NavLink)`
  text-decoration: none;
  color: #000;
  font-weight: 600;
  &:first-child {
    margin-right: 12px;
  }
  &.active {
    color: #d88d02;
  }
`;

export const CurrentUser = styled.div`
  display: flex;
`;

export const UserName = styled.p`
  margin-right: 4px;
  font-weight: 600;
  margin-right: 12px;
`;

export const LogOut = styled.button`
  height: 28px;
  width: 80px;
  background-color: #ffffff;
  cursor: pointer;
  border-radius: 8px;
  border: 2px solid #d88d02;
  color: #df960e;
  font-weight: 600;
  &:hover {
    background-color: #f0eeee;
  }
  &:active {
    box-shadow: 1px 1px 1px 0px #6f6f6f, inset 4px 4px 4px 0px #bdbdbd,
      5px 5px 4px -2px rgba(0, 0, 0, 0);
  }
`;