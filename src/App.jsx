import React from "react";
import "./App.css";
import {  Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NotFound from "./components/NotFound/NotFound";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Cart from "./components/Cart/Cart"

import { CartProvider } from "./Context/Context";
import Checkout from "./components/Checkout/Checkout";


const App = () => {
  return (
      <div className="App">
      <CartProvider> 
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer />} exact />
          <Route path="/category/:categoryId" element={<ItemListContainer/>} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/checkout" element= {<Checkout/>}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        </CartProvider>   
      </div>
  );
};

export default App;
