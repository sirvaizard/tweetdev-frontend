import styled from 'styled-components'

export const SuccessNotification = styled.div`
  margin: 10px;

  p {
    font-size: 24px;
    color: ${props => props.theme.colors.menuItemHover};
  }
`