import "./Header.scss";
import React from "react";
import logo from "../../assets/images/logo/Logo.svg";
import userIcon from "../../assets/images/icons/user-icon.png";

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="pickaflix coral logo" />
      <nav className="header__nav">
        <div className="header__pages">
          <h1 className="header__page">HOME</h1>
          <h1 className="header__page">PROFILE</h1>
          <h1 className="header__page">RANDOM SHUFFLE</h1>
        </div>
        <div className="header__account">
          <img className="header__user-icon" src={userIcon} alt="user icon" />
          <h1 className="header__page">ACCOUNT</h1>
        </div>
      </nav>
    </header>
  );
}
