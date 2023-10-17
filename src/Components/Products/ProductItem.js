import React from 'react'
import { styled } from 'styled-components'
import Price from '../Price/Price'

const Container = styled.div`
`;

const Bellow = styled.div`
  position: fixed;
  color: #ccc;
  font-size: 30rem;
  opacity: .04;
  top: 0;
  left: 14%;
  z-index: -100;
  font-family: Bauhaus;
`;

const Contant = styled.div`
  display: flex;
  flex-direction: column;
`;

const Mark = styled.h1`
  color: #ccc;
`;

const Model = styled.h1`
  color: #ccc;
`;

const ProductItem = ({model, price, mark}) => {
  return (
    <Container >

      <Bellow>{mark}</Bellow>

      <Contant >
        
        <Mark >{mark}</Mark>
        <Model>{model}</Model>
        <Price mt='1rem' value={price} />

      </Contant>
    </Container>
  )
}

export default ProductItem