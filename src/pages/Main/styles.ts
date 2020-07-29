import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  height: auto;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto 0;
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  margin-top: 20px;
`;
