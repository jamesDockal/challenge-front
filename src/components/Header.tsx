import React from "react";
import Logo from "../images/agencia-eplus-n-logo.png";

export default function Header() {
  return (
    <div>
      <div className="logo-image">
        <img src={Logo} alt="logo" />
      </div>
      <div>
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
