// bNavbar.js

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChartBar,
  faFile,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "../bnav/bNavbar.css";
// import logo from "../components/logo.jpg";

const bNavbar = ({ onToggleSideNav }) => {
  const [screenWidth, setScreenWidth] = useState(0);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);

    if (window.innerWidth > 1000) {
      onToggleSideNav({ screenWidth: window.innerWidth });
    }
  };

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bottom-navbar">
      <ul className="bottom-nav">
        <NavItem icon={faHome} text="Home" />
        <NavItem icon={faChartBar} text="Analytics" />
        <NavItem icon={faFile} text="Description" />
        <NavItem icon={faUser} text="User" />
      </ul>
    </div>
  );
};

const NavItem = ({ icon, text }) => (
  <li className="bottom-nav-item">
    <a className="bottom-nav-link">
      <span className="bottom-link-icon">
        <FontAwesomeIcon icon={icon} />
      </span>
      <span className="bottom-link-text">{text}</span>
    </a>
  </li>
);

export default bNavbar;
