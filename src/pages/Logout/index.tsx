import React, { useContext } from 'react'

import { ExitNotification } from './styles'
import SocketContext from '../../contexts/socket'

export default function Logout() {
  const { socket } = useContext(SocketContext)

  localStorage.removeItem('@tweetdev:auth')
  socket.disconnect()

  console.log('sair')
  return (
    <ExitNotification>
      <p>Saindo...</p>
      { window.location.reload() }
    </ExitNotification>
  )
}