import React from 'react'
import styled from 'styled-components'

const Container = styled.h2`
  color: ${({color}) => color};
  font-family: FuturaBook;
  font-size: 18px;
`;

const Subtitle = ({value, color}) => {
  return (
    <Container color={color}>
      {value}
    </Container>
  )
}

export default Subtitle