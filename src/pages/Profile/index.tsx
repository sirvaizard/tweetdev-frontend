import React from 'react'

import SideBar from '../../components/Sidebar'
import UserProfile from '../../components/UserProfile'

import { Container } from './styles'

interface RouteProps {
  match?: {
    params: {
      id: string;
    }
  };
}

export default function Profile({ match }: RouteProps) {
  return (
    <Container>
      <SideBar />
      <UserProfile username={match ? match.params.id : null} />
    </Container>
  )
}