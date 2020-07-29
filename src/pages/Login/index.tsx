import React, { useState, useContext, ChangeEvent, FormEvent } from 'react';
import { useHistory } from 'react-router-dom'

import AuthContext from '../../contexts/auth'

import {
  Container, Form, Login, Input, Signup, Info, UserIcon, KeyIcon, InvalidInput, InputContainer
} from './styles';

import Logo from '../../components/Logo';

export default function SignIn() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [invalidUsername, setInvalidUsername] = useState<boolean>(false)
  const [invalidPassword, setInvalidPassword] = useState<boolean>(false)
  const {handleLogin} = useContext(AuthContext)
  const history = useHistory()

  function handleChangeUsername(event: ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value)
  }

  function handleChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value)
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    setInvalidUsername(false)
    setInvalidPassword(false)
    //add loadind here

    try {
      await handleLogin({ username, password })

    } catch ({ response }) {
      const { data } = response

      if(data.field === 'username')
        return setInvalidUsername(true)
      
      if(data.field === 'password')
        return setInvalidPassword(true)
    }

    history.push('/home')

    // remove loading
  }

  return (
    <Container>
      <Logo />
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <label>
            <UserIcon />
            <Input type="text"
              required
              minLength={3}
              placeholder="usuário"
              value={username}
              onChange={handleChangeUsername}
            />
          </label>

          { invalidUsername && <InvalidInput>Usuario Invalido</InvalidInput> }
        </InputContainer>

        <InputContainer>
          <label>
            <KeyIcon />
            <Input
              type="password"
              required
              minLength={6}
              placeholder="********"
              value={password}
              onChange={handleChangePassword}
            />
          </label>

          { invalidPassword && <InvalidInput>Senha Invalida</InvalidInput> }
        </InputContainer>

        <Login>ENTRAR</Login>
      </Form>

      <Info>Não possui conta?</Info>
      <Signup to="/signup">REGISTRE-SE</Signup>
    </Container>
  );
}
