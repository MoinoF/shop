//@ts-check

import React from 'react'
import styled from 'styled-components'
import MenuContext from '../MenuContext';
import { database } from '../Database/Database';
import ProductCard from '../Products/ProductCard';
import SearchInput from '../Search/SearchInput';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`

  width: 75%;
  padding: 4rem 3.5rem;
  min-height: 100vh;
  margin-left: 25%;
  position: relative;

`;

const ProductsContainer = styled.div`

  display: flex;
  place-content: center;
  margin-top: 2rem;

`;

const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 3rem;
  column-gap: 2rem;
  place-content: center;
`

const Home = () => {

  const { setPathActive, setIsHome, setIsOpenedMenu, isOpenedMenu } = React.useContext(MenuContext)

  console.log(database);

  React.useEffect(() => {

    setPathActive(true)
    setIsHome(true)
    setIsOpenedMenu(true)
    

  }, [setPathActive, setIsHome, setIsOpenedMenu])


  console.log(isOpenedMenu);

  return (
    
    <HomeContainer className='animeLeft'>
      <SearchInput />
      <ProductsContainer >
        <Products>
          <Link to={'/product/sony'}>
            <ProductCard model={'Sony'} price={'3433'} desc={'Perfect'} />
          </Link>
          <ProductCard model={'Sony'} price={'3433'} desc={'Perfect'} />
          <ProductCard model={'Sony'} price={'3433'} desc={'Perfect'} />
          <ProductCard model={'Sony'} price={'3433'} desc={'Perfect'} />
          <ProductCard model={'Sony'} price={'3433'} desc={'Perfect'} />
          <ProductCard model={'Sony'} price={'3433'} desc={'Perfect'} />
          <ProductCard model={'Sony'} price={'3433'} desc={'Perfect'} />
          <ProductCard model={'Sony'} price={'3433'} desc={'Perfect'} />
        </Products>
      </ProductsContainer>
    </HomeContainer>

  )
}

export default Home