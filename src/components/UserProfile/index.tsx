import React, { useState, useEffect, useCallback, useContext } from 'react'

import api from '../../services/api'
import AuthContext from '../../contexts/auth'

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
  const [isFollowing, setIsFollowing] = useState<boolean>(false)
  const { user: loggedUser } = useContext(AuthContext)

  const handleFollowUser = useCallback(async () => {
    await api.post(`/users/${user.id}/follow`)

    setIsFollowing(true)
  }, [user.id])

  const handleUnfollowUser = useCallback(async () => {
    await api.delete(`/users/${user.id}/unfollow`)

    setIsFollowing(false)
  }, [user.id])

  useEffect(() => {
    async function fetchUser() {
      const { data } = await api.get(`/users/${username}`)
      
      setUser(data)
    }

    async function fetchIsFollowing() {
      const { data } = await api.get(`/users/${user.id}/following`)

      setIsFollowing(data.following)
    }

    fetchUser()
    fetchIsFollowing()

  }, [user.id, username])

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
        { (loggedUser.id !== user.id ) && (isFollowing ?
          <Button onClick={handleUnfollowUser}>Unfollow</Button> :
          <Button onClick={handleFollowUser}>Follow</Button>)
        }
      </Header>

      <FeedProfile userId={user.id}/>
    </Container>
  )
}

export default UserProfile