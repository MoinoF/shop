// @ts-check

import React from 'react'
import { styled } from 'styled-components'


const TitleContainer = styled.h1`
  font-family: FuturaBook;
  font-size: 24px;
  color: ${({color}) => color};
`;

const Title = ({value, color}) => {
  return (
    <TitleContainer color={color} >{value}</TitleContainer>
  )
}

export default Title