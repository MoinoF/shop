import React from 'react'
import styled from 'styled-components'
import CartSvg from '../../assets/icons/Cart';
import { Link, NavLink } from 'react-router-dom';
import { database } from '../Database/Database';
import HomeSvg from '../../assets/icons/HomeSvg';
import PhoneSvg from '../../assets/icons/PhoneSvg';
import LaptopSvg from '../../assets/icons/LaptopSvg';

const MenuContainer = styled.div`

  min-height: 100vh;
  max-height: 100vh;
  width: 5%;
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

export const Container = styled.div`


`;

export const Logo = styled.div`

  color: var(--title);
  place-self: start;

`;

export const Cart = styled.div`

  margin-top: 2rem;
  place-self: start;

`;

const CategoriesContainer = styled.div`

  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;

`;

const CategoriesList = styled.ul`

  margin-top: 1rem;
  margin-left: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

`;

const CategorieItem = styled.li`

  font-family: FuturaBook;

`;

const MobileMenu = () => {

  const iconSize = '24'
    const iconFill = '#ccc'
  
    const menuIcons = [
      <PhoneSvg size={iconSize} fill={iconFill}/>,
      <LaptopSvg size={iconSize} fill={iconFill}/>,
      <PhoneSvg size={iconSize} fill={iconFill}/>,
      <LaptopSvg size={iconSize} fill={iconFill} />,
      <LaptopSvg size={iconSize} fill={iconFill} />
    ];
  
    const categoriesDB = database[0];

  return (
    <>

    <MenuContainer className='animeMenuMobile'>
      <Container>
        <Link to={'/'}>
          <Logo>Dart Shop</Logo>
        </Link>
        <Cart>
          <CartSvg size={"30"} color={"#ee4541"} />
        </Cart>
        <CategoriesContainer>

            <NavLink className='act hv' to={'/'}>
              <HomeSvg fill='#ccc' size={'24'} />

            </NavLink>
          <CategoriesList >
            {categoriesDB.map((categorie, index) => (
              <CategorieItem key={categorie}>
                <NavLink style={{display: "inline-block", letterSpacing: ".01rem"}} to={`${categorie.toLowerCase()}`}>

                    {menuIcons[index]}

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


export default MobileMenu