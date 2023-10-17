import React from 'react'
import styled from 'styled-components'
import Title from '../Title/Title';
import Nav from './Nav';

const HeaderContainer = styled.div`

`;

const Container = styled.div`
  padding: 3rem 2rem 0 2rem;
  /* background: var(--admin-header); */
  background: #333;
`

const Header = () => {

  

  return (
    <HeaderContainer>
     <Container>
      <Title value='Admin' color='#e6e6e6' />
      <Nav />
      </Container> 
    </HeaderContainer>
  )
}

export default Header