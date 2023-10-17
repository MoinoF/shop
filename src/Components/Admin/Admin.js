import React from 'react'
import styled from 'styled-components'
import Title from '../Title/Title'
import Header from './Header'
import { Route, Routes } from 'react-router-dom'
import Products from './Products'
import AddProduct from './AddProduct'

const AdminContainer = styled.div``
const Container = styled.div`
  padding: 4rem 2rem;
`;

const Admin = () => {




  return (
    <AdminContainer>
      
      <Header />
      <Container>
        <Routes>
          <Route path='' element={<Products />} />
          <Route path='new' element={<AddProduct />} />
        </Routes>
      </Container>

    </AdminContainer>
  )
}

export default Admin