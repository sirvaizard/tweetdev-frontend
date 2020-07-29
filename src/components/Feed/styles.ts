import styled from 'styled-components';

export const Container = styled.section`
  max-width: 600px;
  width: 100%;

  display: flex;
  flex-direction: column;

  margin: 5px 0;
`;

export const TweetNotification = styled.button`
  color: ${props => props.theme.colors.mainColor};
  border: none;
  background: transparent;
  font-size: 18px;
  font-weight: bold;
  text-align: center;

  padding-top: 10px;
`