import React, { useContext, useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom'

import {
  Container,
  Avatar,
  UserInfo,
  Name,
  Username,
  Menu,
  MenuItem,
} from './styles';

import AuthContext from '../../contexts/auth'

const Sidebar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('')
  const { user } = useContext(AuthContext)
  const location = useLocation()

  useEffect(() => {
    const regexResult = location.pathname.match(/^\/([\w]+)/)

    if(regexResult)
      setActiveLink(regexResult[1])
  }, [location.pathname])

  const isActiveLink = useCallback((path: string) => {
    return (activeLink === path) ? 'true' : 'false'
  }, [activeLink])

  return (
    <Container>
      <Avatar src={user.avatar.url} />
      <UserInfo>
        <Name>{ user.name }</Name>
        <Username><strong>@</strong>{ user.username }</Username>
      </UserInfo>
      <Menu>
        <MenuItem to="/home" active={isActiveLink('home')}>Início</MenuItem>
        <MenuItem to={`/profile/${user.username}`} active={isActiveLink('profile')}>Perfil</MenuItem>
        <MenuItem to="/home" active={isActiveLink('config')}>Configurações</MenuItem>
        <MenuItem to="/logout" active={isActiveLink('logout')}>Sair</MenuItem>
      </Menu>
    </Container>
  );
}

export default Sidebar