// @ts-check

import React from 'react'
import styled from 'styled-components'
import Form from '../Form/LoginForm';
import { Link } from 'react-router-dom';
import Cart from '../../assets/icons/Cart';
import MenuContext from '../MenuContext';

const Container = styled.div`

  min-height: 100vh;
  max-height: 100vh;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;

`;

const Square = styled.div`

  width: 300px;
  height: calc(100vh - 7rem);
  display: flex;
  flex-direction: column;
  place-items: center;
  place-content: center;
  padding: 4rem 2rem;

`
const CreateAcount = styled.div`
  color: #aaa;
  margin-top: 4rem;
`;



const Login = () => {

  const {setPathDesktopActive} = React.useContext(MenuContext)

  React.useEffect(() => {

    setPathDesktopActive(false)

  }, [setPathDesktopActive])
  

  return (
    <Container className='easeIn'>

      <Square >

      <Form />

      <CreateAcount >
        No account yet?
        <Link style={{color: "#ee4541"}} to='createacount'> Create acount</Link>
      </CreateAcount>

      </Square>
    </Container>
  )
}

export default Login