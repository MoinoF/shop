

import React from 'react'
import styled from 'styled-components'
import CartSvg from '../../assets/icons/Cart';
import Title from '../Title/Title';
import { Link, NavLink } from 'react-router-dom';
import { database } from '../Database/Database';
import MenuContext from '../MenuContext';

const MenuContainer = styled.div`

  min-height: 100vh;
  max-height: 100vh;
  width: 25%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 4rem 2rem;
  box-shadow: 0 0 5px 5px rgba(0,0,0, .2);
  z-index: 2;
  display: flex;
  flex-direction: column;
  place-items: center;
  transition: .3s;

`;

const Container = styled.div`


`;

const Logo = styled.div`

  color: var(--title);
  place-self: start;

`;

const Cart = styled.div`

  margin-top: 2rem;
  place-self: start;

`;

const CategoriesContainer = styled.div`

  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  place-content: center;

`;

const CategoriesList = styled.ul`

  margin-top: 1rem;
  margin-left: 1.5rem ;
  display: flex;
  flex-direction: column;
  gap: 1rem;

`;

const CategorieItem = styled.li`

  font-family: FuturaBook;

`;

const DesktopMenu = () => {

  const { isHome } = React.useContext(MenuContext);
  
    const categoriesDB = database[0];

  return (
    <>

    <MenuContainer className='animeL'>
      <Container>
        <Link to={'/'}>
          <Logo>Dart Shop</Logo>
        </Link>
        <Cart>
          <CartSvg size={"30"} color={"#ee4541"} />
        </Cart>
        <CategoriesContainer>

            <Link to={'/'}>
              <Title color={`${isHome ? "#ee4541" : "#e6e6e6"}`} value='Products' />
            </Link>

          <CategoriesList >

            {categoriesDB.map((categorie) => (
              <CategorieItem key={categorie}>
                <NavLink style={{display: "inline-block", letterSpacing: ".01rem"}} to={`${categorie.toLowerCase()}`}>
                    {categorie}
                </NavLink>
              </CategorieItem>
            ))}
          </CategoriesList>
        </CategoriesContainer>
      </Container>
    </MenuContainer>

  </>
  )
}


export default DesktopMenu