import React, { useState } from "react";
import "./Navigation.css";
import { BsMoonStarsFill, BsSearch, BsHeart, BsCart3 } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import SideBar from "./SideBar";

function Navigation() {

  const [sideBarVisible, setSideBarVisible] = useState(false);

  const handleSideBar = () => {
    setSideBarVisible(!sideBarVisible)
  }

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

      <div className="nav__bottom">
        <div className="nav__bottom__left">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">About</a>
        </div>
        <div className="nav__bottom__mid">
          <a href="#">/ LUMOS \</a>
        </div>
        <div className="nav__bottom__right">
          <div className="search">
            <BsSearch className="icon" />
            <p>Search</p>
          </div>
          <div className="wish">
            <BsHeart className="icon" />
            <p>Wishlist</p>
          </div>
          <div className="cart">
            <BsCart3 className="icon" />
            <p>1 item</p>
          </div>
          <div className="ham">
            <IoMenu className="hamSide" onClick={handleSideBar}/>
          </div>
        </div>
      </div>
      {sideBarVisible && <SideBar onClick={handleSideBar}/>}
    </div>
  );
}

export default Navigation;
