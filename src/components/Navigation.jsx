import React from "react";
import "./Navigation.css";
import { BsMoonStarsFill } from "react-icons/bs";

function Navigation() {
  return (
    <div className="nav">
      {/* Top div */}
        {/* Currency */}
        {/* Welcome text */}
        {/* Login register btns */}

      <div className="nav__top">
        <p className="nav__top__left">Currency: LKR</p>
        <p className="nav__top__mid">
          Welcome to the best<span id="hary">Harry Potter</span> shop!
        </p>
        <div className="nav__top__auth">
          <a href="#">Login</a>
          <a href="#">Register</a>
          <BsMoonStarsFill className="modeIcon" />
        </div>
      </div>

      {/* Bottom div */}
        {/* left button links home, shop */}
        {/* logo */}
        {/* search btn, cart, wishlist */}
      
      
    </div>
  );
}

export default Navigation;
