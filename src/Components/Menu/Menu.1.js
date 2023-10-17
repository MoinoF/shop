import React from 'react';
import CartSvg from '../../assets/icons/Cart';
import Title from '../Title/Title';
import { Link, NavLink } from 'react-router-dom';
import { database } from '../Database/Database';
import MenuContext from '../MenuContext';
import HomeSvg from '../../assets/icons/HomeSvg';
import PhoneSvg from '../../assets/icons/PhoneSvg';
import LaptopSvg from '../../assets/icons/LaptopSvg';
import { MenuContainer, Container, Logo, Cart, CategoriesContainer, CategoriesList, CategorieItem } from './Menu';

export const Menu = () => {

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

  const { isHome, isOpenedMenu } = React.useContext(MenuContext);


  return (
    <>

      <MenuContainer isOpenedMenu={isOpenedMenu} className='animeL'>
        <Container>
          <Link to={'/'}>
            <Logo>Dart Shop</Logo>
          </Link>
          <Cart>
            <CartSvg size={"30"} color={"#ee4541"} />
          </Cart>
          <CategoriesContainer isOpenedMenu={isOpenedMenu}>
            {isOpenedMenu ?

              <Link to={'/'}>
                <Title color={`${isHome ? "#ee4541" : "#e6e6e6"}`} value='Products' />
              </Link>

              :

              <NavLink className='act hv' to={'/'}>
                <HomeSvg fill='#ccc' size={'24'} />

              </NavLink>}
            <CategoriesList isOpenedMenu={isOpenedMenu}>
              {categoriesDB.map((categorie, index) => (
                <CategorieItem key={categorie}>
                  <NavLink style={{display: "inline-block", letterSpacing: ".01rem"}} to={`${categorie.toLowerCase()}`}>
                    {isOpenedMenu ?
                      categorie
                      :
                      menuIcons[index]}
                  </NavLink>
                </CategorieItem>
              ))}
            </CategoriesList>
          </CategoriesContainer>
        </Container>
      </MenuContainer>

    </>

  );
};
