// @ts-check

import React from 'react'
import styled from 'styled-components'
import AdminForm from '../Form/AdminForm';
import MenuContext from '../MenuContext';

const ProductContainer = styled.div``;

const Form = styled.div`

  margin-top: 2rem;
`;

const AddProduct = () => {

  const {setCNavActive, setPNavActive} = React.useContext(MenuContext)

  React.useEffect(() => {

    setCNavActive(true)
    setPNavActive(false)

  }, [setCNavActive, setPNavActive])

  return (
    <ProductContainer className='animeL'>
      {/* <Subtitle color={'#bbb'} value={'Adicionar novo produto'} /> */}
      <Form>
        <AdminForm />
      </Form>
    </ProductContainer>
  )
}

export default AddProduct