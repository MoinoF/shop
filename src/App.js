// @ts-check

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { GlobalStatesStorage } from "./Components/GlobalStatesContext";
import Login from "./Components/Login/Login";
import CreateAcount from "./Components/Login/CreateAcount";
import Error404 from './Components/404/404'
import MenuContext from './Components/MenuContext'
import Home from "./Components/Home/Home";
import Menu from "./Components/Menu/Menu";
import Pattern from "./Components/Pattern/Pattern";
import ProductDescription from "./Components/Products/ProductDescription";
import ProductsCategorie from "./Components/Products/ProductsCategorie";
import Admin from "./Components/Admin/Admin";
import AddProduct from "./Components/Admin/AddProduct";

function App() {

  const [pathActive, setPathActive] = React.useState(null)
  const [isOpenedMenu, setIsOpenedMenu] = React.useState(null)
  const [isHome, setIsHome] = React.useState(null)
  const [pNavActive, setPNavActive] = React.useState(null)
  const [cNavActive, setCNavActive] = React.useState(null)
  const [patternActive, setPatternActive] = React.useState(false)
  
  return (
    
    <BrowserRouter>
      <GlobalStatesStorage>
        
        <MenuContext.Provider value={{pathActive, setPathActive, isOpenedMenu, setIsOpenedMenu, setIsHome, isHome, pNavActive, setPNavActive, cNavActive, setCNavActive, patternActive, setPatternActive}}>

          {
            pathActive &&
            <Menu />
          }
          <Pattern />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="/:id" element={<ProductsCategorie />} />
            <Route path="product/:id" element={<ProductDescription />} />
            <Route path="/login/createacount" element={<CreateAcount />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/admin/*" element={<Admin />}>
            </Route>
          </Routes>
        </MenuContext.Provider>
      </GlobalStatesStorage>
     </BrowserRouter>
    
  );
}

export default App;
