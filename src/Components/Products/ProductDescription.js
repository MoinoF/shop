// @ts-check

import React from 'react'
import { styled } from 'styled-components'
import { useParams } from 'react-router-dom'
import { clothes } from '../Database/ClothesDB'
import AddToCart from '../Buttons/Button'
import ChevronDown from '../../assets/icons/ChevronDownSvg'
import MenuContext from '../MenuContext'
import ProductItem from './ProductItem'
import NikePhoto from '../../assets/img/nike.png'

const Container = styled.div`
  margin-left: 15%;
`;

const Header = styled.div`

  display: flex;
  place-items: center;
  gap: 3rem;
  justify-content: space-between;
  padding: 0 2rem;

`;

const HeaderContant = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  place-content: center;
`;

const ProductDesc = styled.div`

`;

const Buttons = styled.div`

  display: flex;
  place-items: center;
  gap: 2rem;
  margin-top: 4em;

`

const AddCartButton = styled.div`

`;

const PayNowButton = styled.div``

const ProductInfo = styled.div`
  height: 100vh;
`;

const ChevDown = styled.div`
  place-self: center;
  
  position: absolute;
  bottom: 4rem;
`;

const ProductImg = styled.img`
  max-height: 400px;
  margin-right: 10%;
  margin-top: 2rem;
`

const ProductDescription = () => {

  // const {setPathDesktopActive, setPathMobileActive, isHome} = React.useContext(MenuContext)

  // const { id } = useParams()

  // React.useEffect(() => {

  //   setPathMobileActive(true)
  //   setPathDesktopActive(false)

  // }, [setPathMobileActive, setPathDesktopActive])

  const { setPathDesktopActive, setPathMobileActive, setIsHome, isHome } = React.useContext(MenuContext)

  React.useEffect(() => {

    
    const handleResize = () => {
      const {matches} = matchMedia('(max-width: 720px)');
      if (matches) {

        setPathDesktopActive(false)
        setPathMobileActive(true)
        
      } else {
        
        setPathDesktopActive(false)
        setPathMobileActive(true)

      }

    }

    setIsHome(true)

    handleResize()

    window.addEventListener('resize', handleResize)

  }, [])

  return (
    <Container className='easeIn'>

      <Header>

        <HeaderContant>

          <ProductDesc>
            <ProductItem  mark={clothes[0].nike.mark} model={clothes[0].nike.model} price={clothes[0].nike.price} />
          </ProductDesc>

          <Buttons>

            <AddCartButton >
              <AddToCart value='add to cart' />
            </AddCartButton>

            <PayNowButton>
              <AddToCart value='Pay now' />
            </PayNowButton>

          </Buttons>


          <ChevDown>
            <ChevronDown color='#777' size={'50'} />
          </ChevDown>

        </HeaderContant>
        
        <ProductImg src={NikePhoto} alt='img' >

        </ProductImg>
      </Header>


  

      <ProductInfo>

      </ProductInfo>

    </Container>
  )
}

export default ProductDescription