// @ts-check

import React from 'react'
import { styled } from 'styled-components'
import Input from './Input';
import Button from '../Buttons/Button'

const FormContainer = styled.form`

  display: flex;
  flex-direction: column;
  gap: 2rem;

`;

const Form = () => {

  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <FormContainer>
      <Input border='#ccc' label='Name' name='name' placeholder='@example' type='text' onChange={({target}) => setName(target.value)} value={name} />
      <Input border='#ccc' label='Password' name='password' placeholder='' type='password' onChange={({target}) => setPassword(target.value)} value={password} />
      <Button value='Login' />
    </FormContainer>
  )
}

export default Form