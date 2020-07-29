import React, { createContext, useState, useContext, useEffect } from 'react'
import SocketContext from './socket'
import api from '../services/api'

interface User {
  id: number;
  name: string;
  username: string;
  avatar: {
    url: string;
  }
}

interface AuthContextProps {
  user: User;
  handleLogin(props: LoginProps): Promise<void>;
}

interface LoginProps {
  username: string;
  password: string;
}

const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>({} as User)
  const {socket, connectSocket} = useContext(SocketContext)

  function setToken(token: string) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }

  async function handleLogin({ username, password }: LoginProps) {
    const { data } = await api.post('/sessions', {
      username,
      password
    })

    const { user, token } = data

    setToken(token)
    setUser(user)
    localStorage.setItem('@tweetdev:auth', JSON.stringify(data))
    await connectSocket(Number(user.id))
  }

  useEffect(() => {
    if(!user.id) {
      const userFromLocalStorage = localStorage.getItem('@tweetdev:auth')

      let parsedUser

      if(userFromLocalStorage)
        parsedUser = JSON.parse(userFromLocalStorage)
      else
        return

      setToken(parsedUser.token)
      setUser(parsedUser.user)
    }
  }, [user.id])

  useEffect(() => {
    if(!socket.disconnected && user.id)
      connectSocket(user.id)
      
  }, [connectSocket, socket.disconnected, user.id])

  return (
    <AuthContext.Provider value={{user, handleLogin}}>
      {children}
    </AuthContext.Provider>
  )
}


export default AuthContext