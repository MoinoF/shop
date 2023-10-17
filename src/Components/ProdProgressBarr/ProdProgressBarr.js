// @ts-check

import React from 'react'
import styled from 'styled-components'

const ProgressBarContainer = styled.div`
  width: 40rem;
  background: #333;
  height: 2px;
  display: grid;
  place-self: center;
  border-radius: 4rem;
`;

const Progress = styled.span`
  width: ${({progress}) => progress};
  height: 100%;
  border-radius: 4rem;
  background: var(--primary);
`;

const ProdProgressBarr = ({progress}) => {
  return (
    <ProgressBarContainer>
      <Progress progress={progress = '40%'}></Progress>
    </ProgressBarContainer>
  )
}

export default ProdProgressBarr