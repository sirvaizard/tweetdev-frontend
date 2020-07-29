import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  padding-bottom: 10px;
  background: #fff;
`

export const Cover = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex: 1;
  height: 170px;

  background-color: ${props => props.theme.colors.mainColor};

  img {
    width: 100px;
    height: 100px;

    position: absolute;
    bottom: -15px;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 10px;
  margin-top: 15px;
  height: 100px;

  p {
    font-size: 14px;
    padding: 0 20px;
    margin-top: 10px;

    text-align: center;
  }
`