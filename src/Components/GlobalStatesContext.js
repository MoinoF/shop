

import React from "react";

export const GlobalStatesContext = React.createContext();

export const GlobalStatesStorage = ({children}) => {
  const [isOpenedMenu, setIsOpenedMenu] = React.useState(null)


  return (
    <GlobalStatesContext.Provider value={{isOpenedMenu, setIsOpenedMenu}}>
      {children}
    </GlobalStatesContext.Provider>
  )

}