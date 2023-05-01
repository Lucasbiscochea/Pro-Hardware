import React from "react";
import "./App.css";
import {  Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import CartWidget from "./components/CartWidget/CartWidget";
import NotFound from "./components/NotFound/NotFound";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
const App = () => {
  return (
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer />} exact />
          <Route path="/category/:categoryId" element={<ItemListContainer/>} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
  );
};

export default App;
