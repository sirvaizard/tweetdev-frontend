import React from 'react'
import { FiHeart, FiRepeat, FiMessageSquare } from 'react-icons/fi'

import { 
  Post, Info, Avatar, UserInfo, Name, Username, Time, Content,
  Language, LanguageName, LanguageIcon, Actions, Container
} from './styles'

import { Tweet } from '../../interfaces/Tweet'

export default function TweetList({ tweets }: {tweets: Tweet[]}) {

  return (
    <Container>
    { tweets.map(tweet => (
      <Post key={String(tweet.id)}>
        <Info>
          <Avatar src={tweet.author.avatar.url} />
          <UserInfo>
            <p>
              <Name>{ tweet.author.name }</Name>
              <Username>@{ tweet.author.username }</Username>
            </p>
            <Time>{ tweet.time }</Time>
          </UserInfo>
          <Language>
            <LanguageName>#{ tweet.language }</LanguageName>
            <LanguageIcon src={`${process.env.REACT_APP_API_URL}/files/languages/${tweet.language}.svg`} />
          </Language>
        </Info>
        <Content>{ tweet.content }</Content>
        <Actions>
          <FiHeart /> <span>0</span>
          <FiRepeat /> <span>0</span>
          <FiMessageSquare /> <span>0</span>
        </Actions>
      </Post>
    ))}
    </Container>
  )
}