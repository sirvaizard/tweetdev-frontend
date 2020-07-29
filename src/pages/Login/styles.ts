import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiLock, FiUser, FiMail, FiType } from 'react-icons/fi'

export const Container = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 50px 0;
  width: 300px;
`;

export const Login = styled.button`
  width: 100%;
  background: ${(props) => props.theme.colors.buttonColor};
  color: ${(props) => props.theme.colors.buttonText};
  padding: 10px 0;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  box-shadow: ${(props) => props.theme.colors.buttonShadow};
`;

export const InputContainer = styled.div`
  height: 80px;
`

export const Input = styled.input`
  font-size: 18px;
  line-height: 24px;
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.colors.formColor};
  padding-left: 35px;
  margin-bottom: 5px;
  width: 100%;
  height: 45px;
`;

export const Info = styled.p`
  margin: 40px 0;
  color: ${(props) => props.theme.colors.infoColor};
  font-size: 16px;
`;

export const InvalidInput = styled.span`
  font-size: 14px;
  color: red;
`

export const Signup = styled(Link)`
  color: ${(props) => props.theme.colors.signupText};
  font-weight: bold;
  font-size: 18px;
`;

export const KeyIcon = styled(FiLock)`
  color: ${(props) => props.theme.colors.formColor};
  position: absolute;
  margin: 10px 0 0 5px;
  width: 20px;
  height: 20px;
`;

export const UserIcon = styled(FiUser)`
  color: ${(props) => props.theme.colors.formColor};
  position: absolute;
  margin: 10px 0 0 5px;
  width: 20px;
  height: 20px;
`;

export const EmailIcon = styled(FiMail)`
  color: ${(props) => props.theme.colors.formColor};
  position: absolute;
  margin: 10px 0 0 5px;
  width: 20px;
  height: 20px;
`;

export const NameIcon = styled(FiType)`
  color: ${(props) => props.theme.colors.formColor};
  position: absolute;
  margin: 10px 0 0 5px;
  width: 20px;
  height: 20px;
`;

