import React from "react";
import "../styles/header.css";
import Logo from "../images/logo/agencia-eplus-n-logo.png";

export default function Header() {
  return (
    <div className="header-container">
      <div className="logo-image">
        <img src={Logo} alt="logo" />
      </div>
      <div className="most-searched">
        <span>Lorem ipsum</span>
        <span>Lorem ipsum</span>
        <span>Lorem ipsum</span>
        <span>Lorem ipsum</span>
        <span>Lorem ipsum</span>
      </div>
      <div className="actions">
        <span className="material-icons">search</span>
        <span className="material-icons">account_circle</span>
        <span className="material-icons">shopping_cart</span>
      </div>
    </div>
  );
}
