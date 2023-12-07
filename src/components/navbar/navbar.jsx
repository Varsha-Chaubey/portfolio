import React from "react";
import logo from "../../Assets/images/logo.jpg";
import contact from "../../Assets/images/contact.jpg";
import { Link } from "react-scroll";
import "./navbar.css";
const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <img src={logo} className="logo" />
        <div className="desktopMenu">
          <Link className="desktopMenuListItem">Home</Link>
          <Link className="desktopMenuListItem">About</Link>
          <Link className="desktopMenuListItem">Portfolio</Link>
          <Link className="desktopMenuListItem">Clients</Link>
        </div>

        <button className="desktopMenuButton">
          <img src={contact} className="desktopMenuImg" />
          Contact Me
        </button>
      </nav>
    </>
  );
};

export default NavBar;
