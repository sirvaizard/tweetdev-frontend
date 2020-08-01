import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 10px;
`

export const Post = styled.div`
  margin-top: 10px;
  padding: 5px 15px;

  background: #fff;
  border-radius: 8px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
`;

export const UserInfo = styled.div`
  flex: 1;
  justify-self: flex-start;
  margin: 10px 0 0 10px;

  & > a {
    color: #333;

    &:visited {
      color: #333;
    }
  }
`;

export const Name = styled.strong`
  font-size: 16px;
  margin-right: 5px;
`;

export const Username = styled.span`
  color: ${(props) => props.theme.colors.infoColor};
`;

export const Time = styled.p`
  font-weight: lighter;
  font-size: 12px;
`;

export const Content = styled.p`
  padding: 10px;
  font-size: 16px;
`;

export const Language = styled.div`
  display: flex;
  align-items: center;
`;

export const LanguageName = styled.span`
  margin-right: 5px;
  font-weight: lighter;
  font-size: 16px;
`;

export const LanguageIcon = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 8px;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;

  height: 24px;
  padding: 20px 0;

  svg {
    width: 16px;
    height: 16px;

    margin-left: 10px;
    transition: ease-in-out .1s;

    &:hover {
      width: 18px;
      height: 18px;

      stroke-width: 2px;
    }
  }

  svg:nth-child(1) {
    color: #ff6978cc;

    &:hover {
      color: #ff6978;
    }
  }

  svg:nth-child(3) {
    color: #90d164cc;
  }

  svg:nth-child(5) {
    color: #000000cc;
  }

  span {
    display: inline-block;
    width: 20px;
    padding-left: 5px;

    font-size: 12px;
  }
`