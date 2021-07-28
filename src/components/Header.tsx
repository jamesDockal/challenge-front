import React, { useState } from "react";
import "../styles/header.css";
import Logo from "../images/logo/agencia-eplus-n-logo.png";
import CardItems from "./CardItems";

export default function Header() {
  const [isCardVisible, setIsCardVisible] = useState<boolean>(false);
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
        <span className="material-icons">person</span>
        <span
          className="material-icons"
          onClick={() => setIsCardVisible(!isCardVisible)}
        >
          shopping_cart
        </span>
        {isCardVisible && <CardItems />}
      </div>
    </div>
  );
}
