import React, { useEffect, useState } from "react";
import "../styles/header.css";
import Logo from "../images/logo/agencia-eplus-n-logo.png";
import CardItems from "./CardItems";

export default function Header() {
  const [isCardVisible, setIsCardVisible] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [smallSearchOpen, setSmallSearchOpen] = useState(false);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
    console.log(window.innerWidth);
  });
  return (
    <div className="header-container">
      <div className="logo-image">
        <img src={Logo} alt="logo" />
      </div>
      <div
        className={`${smallSearchOpen && "small-screen-open"} most-searched`}
      >
        {windowWidth > 1200 ? (
          <>
            <span className={`search`}>Lorem ipsum</span>
            <span className={`search`}>Lorem ipsum</span>
            <span className={`search`}>Lorem ipsum</span>
            <span className={`search`}>Lorem ipsum</span>
            <span className={`search`}>Lorem ipsum</span>
          </>
        ) : (
          <>
            <span
              onClick={() => setSmallSearchOpen(!smallSearchOpen)}
              className={`${
                smallSearchOpen && "rotate-hamburger"
              } hamburger material-icons`}
            >
              menu
            </span>

            <div
              className={
                smallSearchOpen
                  ? "small-search-block-on"
                  : "small-search-block-off"
              }
            >
              <span className={`search`}>Lorem ipsum</span>
              <span className={`search`}>Lorem ipsum</span>
              <span className={`search`}>Lorem ipsum</span>
              <span className={`search`}>Lorem ipsum</span>
              <span className={`search`}>Lorem ipsum</span>
            </div>
          </>
        )}
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
