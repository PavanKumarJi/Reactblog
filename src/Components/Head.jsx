import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <div>
      <div className="title">
        <h1 className="the">The</h1>
        <h2 className="siren">Siren</h2>
      </div>

      <nav className="Navbar">
        <Link to="/home" className="nav">
          Home
        </Link>
        <Link to="/bollywood" className="nav">
          Bollywood
        </Link>
        <Link to="torisum" className="nav">
          Tourism
        </Link>
        <Link to="fitness" className="nav">
          Fitness
        </Link>
        <Link to="food" className="nav">
          Food
        </Link>
      </nav>
    </div>
  );
};
export default Head;
