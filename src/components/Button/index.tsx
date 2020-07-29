import styled from 'styled-components'

const size: { [key: string]: string} = {
  default: 'auto',
  full: '100%'
}

interface ButtonProps {
  size?: string | null;
} 

const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  width: ${props => size[props.size ? props.size : 'default']};

  padding: 10px 20px;
  margin: auto;

  background: ${(props) => props.theme.colors.mainColor};
  border: 1px solid ${(props) => props.theme.colors.mainColor};
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;

  transition: .15s ease-in-out;

  &:hover, &:disabled {
    background: transparent;
    color: ${(props) => props.theme.colors.mainColor};
  }

  &:disabled {
    cursor: not-allowed;
  }

  svg {
    margin-right: 5px;
    width: 18px;
    height: 18px;
  }
`

export default Button