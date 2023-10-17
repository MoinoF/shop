import React from 'react'
import styled from 'styled-components'
import Input from './Input'
import FileInput from './FileInput'
import Textarea from './Textarea'
import AdminButton from '../Buttons/AdminButton'

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 160px;
  gap: 4rem;
  
`
const SideL = styled.div`
  /* width: 360px; */
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
const SideR = styled.div`
/* width: 360px; */
  display: flex;
  flex-direction: column;
  gap: 2rem;

`

const Button = styled.div`
  margin-top: 1.5rem;
`

const AdminForm = () => {
  return (
    <Form>
      <SideL>
        <Input border='#ee4541' type='text' label="Selecione a categoria" placeholder='Categoria'/>
        <Input border='#ee4541' type='text' label="Nome do produto" placeholder='Nome'/>
        <Input border='#ee4541' type='text' label="Marca" placeholder='Marca'/>
        <Input border='#ee4541' type='text' label="Modelo" placeholder='Modelo'/>
        
      </SideL>
      <SideR>
        <Textarea border='#ee4541' type='textarea' label='Descrição'   placeholder='Descrição' />
        <FileInput border='#ee4541' type='file' label="Imagem" placeholder='Imagem'/>
        <Input border='#ee4541' type='link' label="Link" placeholder='Link'/>

      </SideR>
      <Button>  
        <AdminButton value='Add'/>
      </Button>
    </Form>
  )
}

export default AdminForm