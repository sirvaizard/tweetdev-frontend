import React, { ChangeEvent, FormEvent, useState, useCallback } from 'react';

import api from '../../services/api'

import {
  Container, Form, Login, Input, Signup, Info, UserIcon,
  KeyIcon, EmailIcon, NameIcon, InputContainer, InvalidInput
} from '../Login/styles';
import { SuccessNotification } from './styles'

import Logo from '../../components/Logo';

export default function SignIn() {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [usernameExist, setUsernameExist] = useState<boolean>(false)
  const [accountCreated, setAccountCreated] = useState<boolean>(false)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setUsernameExist(false)

    try {
      await api.post('/users', {
        username,
        password,
        name,
        email
      })

      setAccountCreated(true)
    } catch({ response }) {
      const { data } = response

      if(data.error)
        setUsernameExist(true)
    }
  }

  const handleChangeUsername = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }, [])

  const handleChangePassword = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }, [])

  const handleChangeName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }, [])

  const handleChangeEmail = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }, [])

  return (
    <Container>
      <Logo />
      { accountCreated ? 
      (
        <SuccessNotification>
          <p>Cadastro efetuado com sucesso!</p>
        </SuccessNotification>
      ) : 
      (
        <>
          <Form onSubmit={handleSubmit}>
          <InputContainer>
            <label>
              <UserIcon />
              <Input
                type="text"
                required
                placeholder="usuário"
                value={username}
                onChange={handleChangeUsername}
              />
            </label>
          </InputContainer>
          <InputContainer>
            <label>
              <KeyIcon />
              <Input
                type="password"
                required
                placeholder="********"
                value={password}
                onChange={handleChangePassword}
              />
            </label>
          </InputContainer>
          <InputContainer>
            <label>
              <NameIcon />
              <Input
                type="text"
                required
                placeholder="nome"
                value={name}
                onChange={handleChangeName}
              />
            </label>
          </InputContainer>
          <InputContainer>
            <label>
              <EmailIcon />
              <Input
                type="email"
                required
                placeholder="email@example.com"
                value={email}
                onChange={handleChangeEmail}
              />
            </label>

            { usernameExist && <InvalidInput>Usuario/Email já cadastrado.</InvalidInput> }
          </InputContainer>

          <Login>CADASTRAR</Login>
        </Form>
        <Info>Já possui conta?</Info>
      </>
      )}      

      <Signup to="/">LOGUE-SE</Signup>
    </Container>
  );
}
