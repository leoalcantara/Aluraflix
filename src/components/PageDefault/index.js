import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

// import { Container } from './styles';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-right: 5px;
  padding-left: 5px;
`;

function PageDefault({ children }) {
  return (
      <>
        <Menu/>
          <Main>
            {children}
          </Main>            
        <Footer/>
      </>
  );
}

export default PageDefault;