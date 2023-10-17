//@ts-check

import React from 'react'
import { styled } from 'styled-components'

const ButtonContainer = styled.button`

  background: var(--primary);
  border: 2px solid var(--primary);
  color: var(--title);
  padding: .5rem 1.5rem;
  border-radius: 4rem;
  text-transform: uppercase;
  font-family: FuturaBook;
  cursor: pointer;
  font-weight: bold;
  width: 100%;

  &:hover {
    border: 3px solid var(--primary);
  }

`;

const Button = ({value}) => {
  return (
    <ButtonContainer >{value}</ButtonContainer>
  )
}

export default Button