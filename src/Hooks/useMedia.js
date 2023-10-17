import React from 'react'
import MenuContext from '../Components/MenuContext'

const useMedia = () => {

  const { setPathDesktopActive, setPathMobileActive, setIsHome, isHome } = React.useContext(MenuContext)

  const checkMedia = (media) => {

    const {matches} = matchMedia(`(max-width: ${media}px)`)

    

  }


  return 

}

export default useMedia