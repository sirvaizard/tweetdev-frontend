import styled from 'styled-components';

export const Container = styled.div`
  font-weight: bold;
`;

export const Tweet = styled.span`
  color: ${(props) => props.theme.colors.tweetColor};
  font-size: 48px;
`;

export const Braces = styled.span`
  color: ${(props) => props.theme.colors.bracesColor};
  font-size: 64px;
`;

export const Dev = styled.span`
  color: ${(props) => props.theme.colors.devColor};
  font-size: 64px;
`;
