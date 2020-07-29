import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { SocketProvider } from './contexts/socket'
import { AuthProvider } from './contexts/auth'
import Footer from './components/Footer'

import GlobalStyle from './styles/global'
import Routes from './routes'

import dark from './styles/themes/dark'

function App() {
  const [theme, ] = useState(dark)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SocketProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </SocketProvider>
      <Footer />
    </ThemeProvider>
  );
}

export default App
