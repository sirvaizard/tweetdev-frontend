import React from 'react';

import {
  Container,
  MainContent
} from './styles';

import Feed from '../../components/Feed';
import Sidebar from '../../components/Sidebar';
import NewTweet from '../../components/NewTweet'

export default function Main() {
  return (
    <Container>
      <Sidebar />
      <MainContent>
        <NewTweet />
        <Feed />
      </MainContent>
    </Container>
  );
}
