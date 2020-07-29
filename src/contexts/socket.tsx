import React, { createContext, useState } from 'react'
import io from 'socket.io-client'

interface SocketContextProps {
  socket: SocketIOClient.Socket;
  connectSocket(id: number): Promise<void>;
}

const SocketContext = createContext({} as SocketContextProps)

export const SocketProvider: React.FC = ({ children }) => {
  const [socket, setSocket] = useState<SocketIOClient.Socket>({} as SocketIOClient.Socket)

  async function connectSocket(id: number): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        setSocket(io.connect('http://localhost:3333', {
          query: `id=${id}`
        }))
        
        resolve()
      } catch(err) {
        reject('Failed to connect socket')
      }
    })
  }
  
  return (
    <SocketContext.Provider value={{socket, connectSocket}}>
      {children}
    </SocketContext.Provider>
  )
}

export default SocketContext