import styled from 'styled-components'

const TWEET_WARN_LENGTH: number = 246

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: ${(props) => props.theme.colors.newPostShadow};
  max-width: 600px;
  width: 100%;
  padding: 10px;

  background: #fff;
  border-radius: 12px;
`;

export const LanguageSelection = styled.div`
  display: flex;
  align-self: flex-start;
`;

export const Select = styled.select`
  border: none;
  background: #fff;
  color: #444;
`;

export const Option = styled.option`
  color: #444;
`;

export const LanguageIcon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 8px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: none;
  padding: 10px 40px;
  font-size: 16px;
  resize: none;
  margin-bottom: 10px;
`;

export const SubmitContainer= styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const TweetLength = styled.span`
  color: ${(props: {length: number}) => props.length < TWEET_WARN_LENGTH ? '#555' : 'red'};
  margin-right: 15px;

  display: inline-block;
  width: 20px;
`