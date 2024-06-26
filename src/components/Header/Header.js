import "./Header.scss";
import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo/Logo.svg";
import userIcon from "../../assets/images/icons/user-icon.png";
import { Link, useLocation } from "react-router-dom";

export default function Header({ logOut, username }) {
  const [greeting, setGreeting] = useState("");
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour >= 0 && currentHour < 12) {
      setGreeting("Good morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }
  }, []);

  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="pickaflix coral logo" />
      </Link>
      <nav className="header__nav">
        <div className="header__pages">
          <Link
            to="/"
            className={
              pathname === "/"
                ? "header__page header__page--active"
                : "header__page"
            }
          >
            HOME
          </Link>
          <Link
            to="/profile"
            className={
              pathname === "/profile"
                ? "header__page header__page--active"
                : "header__page"
            }
          >
            PROFILE
          </Link>
          <p></p>
        </div>
        <div className="header__account">
          <img className="header__user-icon" src={userIcon} alt="user icon" />
          <h1 className="header__page"> {`${greeting}, ${username}!`}</h1>
          <button onClick={logOut} className="header__logout">
            Log out
          </button>
        </div>
      </nav>
    </header>
  );
}
