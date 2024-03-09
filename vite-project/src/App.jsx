import React from 'react'
import Navbar from './components/Navbar'
import Products from './components/Products'
import {  Routes, Route } from "react-router-dom";
import StoreData from './components/StoreData';

const App = () => {
  return (
    <>
          <Navbar />
    <Routes>
        <Route path="/">
          {/* <Route index element={<Home />} /> */}
          <Route path="products" element={ <Products />} />
          <Route path="stooredata" element={ <StoreData />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>

     
    </>
  )
}

export default App