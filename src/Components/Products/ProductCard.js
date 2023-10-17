import React from 'react'
import { styled } from 'styled-components'
import PlaySvg from '../../assets/icons/PlaySvg';
import Price from '../Price/Price';

const Container = styled.div`
  width: 180px;
  height: 320px;
  background: var(--primary);
  margin-left: 0;
  cursor: pointer;
  transition: .3s;
  display: grid;
  grid-template-rows: 1fr 1fr;
  box-shadow: 0 0 5px rgba(0,0,0, .5);
  &:hover {
    scale: 1.1;
    box-shadow: 0 10px 20px 5px rgba(0,0,0, .2);
  }
`;

const ProductPreview = styled.div`
  display: flex;
  place-content: center;
  place-items: center;
`;

const ProductDescription = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
  background: rgba(0,0,0, 1);
  background-color: var(--background);
  color: var(--paragraph);
  gap: .625rem;
`;


const ProductModel = styled.p``;

const ProductTextDesc = styled.p`
  max-width: 160px;
  text-align: center;
`;

const ProductCard = ({model, price, desc}) => {
  return (
    <Container>
      <ProductPreview>
        <PlaySvg size={"100"} />
      </ProductPreview>

      <ProductDescription>
        <ProductModel>{model}</ProductModel>       
        <Price value={price} />     
        <ProductTextDesc>{desc}</ProductTextDesc>
      </ProductDescription>
    </Container>
  )
}

export default ProductCard