//@ts-check

import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MenuContext from '../MenuContext';

const Container = styled.div`
  max-width: 70rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;


`

const Paragraph = styled.h1`
font-size: 4rem;
  color: #fb4;
`;

const Contant = styled.div`
  width: 30rem;
  position: absolute;
  right: 0;
`;

const Error404 = styled.p`
  color: #ccc;
  margin-top: .625rem;
  text-align: left;
  font-size: 2rem;
`;

const HomeLink = styled.div`
  margin-top: 1rem;
`


const Page404 = () => {

  const {setPathDesktopActive} = React.useContext(MenuContext)

  React.useEffect(() => {

    setPathDesktopActive(true)

  }, [setPathDesktopActive])

  return (
    <Container className='easeIn'>

      <Contant>


        <Paragraph>
          Erro 404!
        </Paragraph>
        <Error404>
          Page not found
        </Error404>


        <HomeLink>

          <Link style={{color: '#ee4541', marginTop: "1rem"}} to='/' >click to return to homepage!</Link>
        </HomeLink>

      </Contant>
      
    </Container>
  )
}

export default Page404