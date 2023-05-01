import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      
      <h2>404 - Not Found</h2>
      <p>Lo siento, la página que estás buscando no existe.</p>
      <Link to="/">Ir a la página de inicio</Link>
    </div>
  );
};

export default NotFound;