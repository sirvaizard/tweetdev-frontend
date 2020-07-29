import React from 'react';

import {
  Container, Tweet, Braces, Dev,
} from './styles';

export default function Logo() {
  return (
    <Container>
      <Tweet>tweet</Tweet>
      <Braces>{'{{'}</Braces>
      <Dev>DEV</Dev>
      <Braces>{'}}'}</Braces>
    </Container>
  );
}
