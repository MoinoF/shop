import React from 'react'
import MenuContext from '../MenuContext'
import Table from '../Table/Table'

const Products = () => {


  const { setCNavActive, setPNavActive} = React.useContext(MenuContext)

  React.useEffect(() => {

    setPNavActive(true)
    setCNavActive(false)

  }, [setCNavActive, setPNavActive])

  return (
    <div className='animeL'>
      <Table />
    </div>
  )
}

export default Products