import React, { ChangeEvent, FormEvent, useState } from 'react'
import { FiTerminal } from 'react-icons/fi'
import {
  Container, LanguageSelection, Select, Option, LanguageIcon,
  TextArea, SubmitContainer, TweetLength
} from './styles'
import Button from '../Button'
import api from '../../services/api'

const TWEET_MAX_LENGTH: number = 256

// fetch via api
const languages: string[] = ['Javascript', 'CSharp', 'Python', 'Go', 'C', 'HTML']

export default function NewTeet() {
  const [tweetContent, setTweetContent] = useState<string>('')
  const [language, setLanguage] = useState<string>(languages[0].toLowerCase())
  const [sendingTweet, setSendingTweet] = useState<boolean>(false)
  const [exceededMaxChar, setExceededMaxChar] = useState<boolean>(false)

  function handleTextArea(event: ChangeEvent<HTMLTextAreaElement>) {
    setExceededMaxChar(event.target.textLength > TWEET_MAX_LENGTH)
    setTweetContent(event.target.value)
  }

  async function handleCreateNewTweet(event: FormEvent) {
    event.preventDefault()
    setSendingTweet(true)

    await api.post('/tweets', {
      content: tweetContent,
      language
    })
    
    setSendingTweet(false)
    setTweetContent('')
  }

  function handleChangeLanguage(event: ChangeEvent<HTMLSelectElement>) {
    setLanguage(event.target.value)
  }

  return (
    <Container onSubmit={handleCreateNewTweet}>
      <LanguageSelection>
        <LanguageIcon src={`${process.env.REACT_APP_API_URL}/files/languages/${language}.svg`} />
        <Select name="language" onChange={handleChangeLanguage}>
          { languages.map(lang => <Option key={lang} value={lang.toLowerCase()}>#{lang}</Option>) }
        </Select>
      </LanguageSelection>
      <TextArea
        rows={3}
        value={tweetContent}
        onChange={handleTextArea}
        placeholder="print('say hello to the world')"
      />
      <SubmitContainer>
        <Button disabled={sendingTweet || exceededMaxChar}>
          <FiTerminal /> { sendingTweet ? 'Enviando' : 'Enviar' }
        </Button>
        <TweetLength length={tweetContent.length} >{ TWEET_MAX_LENGTH - tweetContent.length }</TweetLength>
      </SubmitContainer>
    </Container>
  )
}