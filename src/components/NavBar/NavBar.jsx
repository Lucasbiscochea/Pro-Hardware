import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar">
      <span className="nav-logo">ProHardware</span>
      <div className={`nav-menu ${isOpen && "open"}`}>
        <NavLink to={'/category/Procesador'} className={({isActive})=> isActive ? 'isOption' : 'Option'}>Procesadores</NavLink>
        <NavLink to={'/category/MotherBoard'} className={({isActive})=> isActive ? 'isOption' : 'Option'}>MotherBoard</NavLink>
        <NavLink to={'/category/Tarjetas-de-video'} className={({isActive})=> isActive ? 'isOption' : 'Option'}>Tarjetas de Video</NavLink>
        <NavLink to={'/category/Memoria-Ram'} className={({isActive})=> isActive ? 'isOption' : 'Option'}>Memoria Ram</NavLink>
        <NavLink to={'/category/Fuentes'} className={({isActive})=> isActive ? 'isOption' : 'Option'}>Fuentes</NavLink>
        <Link className="cart">
          <CartWidget />
        </Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default NavBar;