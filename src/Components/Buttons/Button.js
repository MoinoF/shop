//@ts-check

import React from 'react'
import { styled } from 'styled-components'

const ButtonContainer = styled.button`

  background: none;
  border: 2px solid var(--primary);
  color: var(--primary);
  padding: .5rem 1.5rem;
  border-radius: 4rem;
  text-transform: uppercase;
  font-family: FuturaBook;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    border: 3px solid var(--primary);
  }

`;

const AddToCart = ({value}) => {
  return (
    <ButtonContainer >{value}</ButtonContainer>
  )
}

export default AddToCart