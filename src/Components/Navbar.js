import React from "react";
import "../App.css";
import { FaAirbnb } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="nav">
      <FaAirbnb className="logo" />
      <span className="logo-text">airbnb</span>
    </nav>
  );
}

export default Navbar;
