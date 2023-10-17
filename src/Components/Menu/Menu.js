// @ts-check

import styled from 'styled-components'
import { Menu } from './Menu.1';

export const MenuContainer = styled.div`

  min-height: 100vh;
  max-height: 100vh;
  width: ${({isOpenedMenu}) => isOpenedMenu ? "25%" : "5%" };
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

export const CategoriesContainer = styled.div`

  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: ${({isOpenedMenu}) => isOpenedMenu ? "inherit" : "center" };

`;

export const CategoriesList = styled.ul`

  margin-top: 1rem;
  margin-left: ${({isOpenedMenu}) => isOpenedMenu ? "1.5rem" : "0" } ;
  display: flex;
  flex-direction: column;
  gap: 1rem;

`;

export const CategorieItem = styled.li`

  font-family: FuturaBook;

`;



export default Menu