import React, { useState, useEffect } from 'react'

import api from '../../services/api'

import { Container, Header, Cover, Info } from './styles'
import Button from '../Button'
import FeedProfile from '../FeedProfile'

interface UserProfileProps {
  username: string | null;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  bio: string;
  avatar: {
    url: string;
  }
}

const UserProfile: React.FC<UserProfileProps> = ({ username }) => {
  const [user, setUser] = useState<User>({} as User)

  useEffect(() => {
    async function fetchUser() {
      const { data } = await api.get(`/users/${username}`)
      
      setUser(data)
    }

    fetchUser()

  }, [username])

  if(!user.avatar) {
    return (
      <div>
        <p>Carregando...</p>
      </div>
    )
  }

  return (
    <Container>
      <Header>
        <Cover>
          <img src={user.avatar.url} alt=""/>
        </Cover>
        
        <Info>
          <h3>{user.name}</h3>
          <span><strong>@</strong>{user.username}</span>

          <p>{user.bio}</p>
        </Info>
        <Button>Seguir</Button>
      </Header>

      <FeedProfile userId={user.id}/>
    </Container>
  )
}

export default UserProfile