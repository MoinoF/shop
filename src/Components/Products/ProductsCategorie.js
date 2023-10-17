import React from 'react'
import styled from 'styled-components'
import { categories } from '../Database/CategoriesDB'
import MenuContext from '../MenuContext'

const ProductsContainer = styled.div`

  width: 70%;
  padding: 4rem 3rem;
  min-height: 100vh;
  margin-left: 30%;

`

const ProductsCategorie = () => {


  const {setIsOpenedMenu} = React.useContext(MenuContext)

  React.useEffect(() => {

    setIsOpenedMenu(true)

  }, [setIsOpenedMenu])

  return (
    <ProductsContainer>

    </ProductsContainer>
  )
}

export default ProductsCategorie