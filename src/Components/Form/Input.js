// @ts-check

import React from 'react'
import styled from 'styled-components'

const InputContainer = styled.div`
`;

const InputComp = styled.input`
  background: none;
  border: ${({border}) => border} solid 1px;
  border-radius: 4rem;
  padding: .5rem 1rem;
  font-size: 18px;
  display: flex;
  justify-items: center;
  font-family: FuturaBook;
  letter-spacing: .01rem;
`;

const Label = styled.label`
  color: #aaa;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  font-family: FuturaBook;
  letter-spacing: .01rem;
`;

const Input = ({border, type, value, onChange, name, label, placeholder}) => {


  return (
    <InputContainer>
      <Label>
        {label}
        <InputComp
        border={border} type={type} onChange={onChange} name={name} value={value} placeholder={placeholder}>
        </InputComp>

      </Label>
    </InputContainer>
  )
}

export default Input