import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  border-radius: 50px 50px 50px 0;
  width: 150px;
  height: 150px;
  margin: 20px 0;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: #fff;
`;

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 50px 0;
`;

interface MenuItemProps {
  active: string | boolean;
}

export const MenuItem = styled(Link)<MenuItemProps>`
  font-size: 18px;
  padding: 2px 0;
  color: ${(props) => (props.active === 'true' ? props.theme.colors.menuItemActive : props.theme.colors.menuItem)};
  font-weight: ${(props) => (props.active === 'true' ? 'bold' : null)};

  &:hover {
    color: ${props => props.theme.colors.menuItemHover};
  }
`;

export const Name = styled.strong`
  font-size: 20px;
`;

export const Username = styled.span`
  font-size: 16px;
  font-weight: lighter;
`;
