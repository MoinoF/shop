// @ts-check

import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div``

const PersonSvg = ({color = '#ccc', size = '16'}) => {
  return (
    <Container>
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} className="bi bi-person-fill" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
      </svg>
      
    </Container>
  )
}

export default PersonSvg
