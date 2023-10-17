// @ts-check

import React from 'react'
import { styled } from 'styled-components'
import SearchSvg from '../../assets/icons/SearchSvg';

const Container = styled.div`
  display: flex;
  gap: .625rem;
  place-items: center;
`;

const InputContainer = styled.div`
  width: 40rem;
  display: flex;
  place-items: center;
  gap: .625rem;
  margin-top: 1px;
`;

const Input = styled.input`
  border: 1px solid #aaa;
  border-radius: 4rem;
  padding: .2rem 1rem;
  background: none;
  transition: .3s;
  width: 12rem;
  &:focus {
    outline: none;
    border: var(--primary) 1px solid;
    width: 100%;
    transition: all.3s;
  }

`;

const SearchInput = () => {


  return (
    <Container>
      <InputContainer>

        <Input type='text'></Input>

        <SearchSvg color='#aaa' />

      </InputContainer>

    </Container>
  )
}

export default SearchInput