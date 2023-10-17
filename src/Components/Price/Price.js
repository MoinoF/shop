// @ts-check

import React from 'react'
import { styled } from 'styled-components'

const PriceContainer = styled.span`
  background: var(--primary);
  border-radius: 3px;
  padding: .2rem .4rem;
  color: var(--primary-hover);
  font-weight: bold;
  width: 4rem;
  display: flex;
  place-content: center;
  place-items: center;
  margin-top: ${({mt}) => mt};
  `

const Price = ({value, mt}) => {
  return (
    <PriceContainer mt={mt} >$ {value}</PriceContainer>
  )
}

export default Price