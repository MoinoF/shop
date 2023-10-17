import React from 'react'
import styled from 'styled-components'
import CartSvg from '../../assets/icons/Cart' 
import MenuContext from '../MenuContext';



const CartPattern = styled.div`
  max-height: 100vh;
  overflow: hidden;
  position: fixed;
  z-index: -100;
  display: ${({patternActive}) => patternActive ? 'inherit' : 'none'};
`;


const Pattern = () => {

  const {patternActive} = React.useContext(MenuContext)

  return (

    <CartPattern patternActive={patternActive}>
      <CartSvg size='1000' opacity = {.02} />
    </CartPattern>

  )
}

export default Pattern