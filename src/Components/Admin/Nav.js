// @ts-check

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import MenuContext from '../MenuContext'

const NavContainer = styled.nav`
  display: flex;
  margin-top: 3rem;

`

const Button = styled.div`
  padding: 1rem 2rem;
  background: ${({cNavActive}) => cNavActive ? "#1a1a1a" : ""};
  background: ${({pNavActive}) => pNavActive ? "#1a1a1a" : ""};
  color: ${({cNavActive}) => cNavActive ? "#ee4541" : ""};
  color: ${({pNavActive}) => pNavActive ? "#ee4541" : ""};
  
`

const Nav = () => {

  const {cNavActive, setCNavActive, pNavActive, setPNavActive} = React.useContext(MenuContext)
  

  return (
    <NavContainer>
      <Link to={''} >
        <Button pNavActive={pNavActive}>
         Produtos
        </Button>
      </Link> 
      <Link  to={'new'} >
        <Button cNavActive={cNavActive}>
          Cadastrar produto
        </Button>
      </Link>
    </NavContainer>
  )
}

export default Nav