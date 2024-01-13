// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faChartBar, faFile, faUser, faSignOutAlt, faBell, faTimes } from '@fortawesome/free-solid-svg-icons';
// import './Navbar.css';
// import logo from '../components/logo.jpg';

// const Sidenav = ({ onToggleSideNav }) => {
//   const [collapsed, setCollapsed] = useState(false);
//   const [screenWidth, setScreenWidth] = useState(0);
//   const [searchInputValue, setSearchInputValue] = useState('');

//   const toggleCollapse = () => {
//     setCollapsed(!collapsed);
//     onToggleSideNav({ collapsed: !collapsed, screenWidth });
//   };

//   const closeSidenav = () => {
//     setCollapsed(false);
//     onToggleSideNav({ collapsed: false, screenWidth });
//   };

//   const handleResize = () => {
//     setScreenWidth(window.innerWidth);

//     if (window.innerWidth <= 768) {
//       setCollapsed(false);
//       onToggleSideNav({ collapsed: false, screenWidth: window.innerWidth });
//     }
//   };

//   useEffect(() => {
//     setScreenWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <div className={`sidenav ${collapsed ? 'sidenav-collapsed' : ''}`}>
//       <div className="logo-container">
//         <button className="logo" onClick={toggleCollapse}>
//         <img src={logo} alt="Logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
//         </button>
//         <div className="logo-text" style={{ display: collapsed ? 'block' : 'none' }}>
//           NavBar
//         </div>
//         <button className="btn-close" style={{ display: collapsed ? 'block' : 'none' }} onClick={closeSidenav}>
//           <FontAwesomeIcon icon={faTimes} className="close-icon" />
//           </button>

//       </div>
//       <ul className="sidenav-nav">
//         <NavItem icon={faHome} text="Home" collapsed={collapsed} />
//         <NavItem icon={faChartBar} text="Analytics" collapsed={collapsed} />
//         <NavItem icon={faFile} text="Description" collapsed={collapsed} />
//         <NavItem icon={faUser} text="User" collapsed={collapsed} />
//         <NavItem icon={faSignOutAlt} text="Logout" collapsed={collapsed} />
//         <NavItem icon={faBell} text="Notifications" collapsed={collapsed} />
//       </ul>
//     </div>
//   );
// };

// const NavItem = ({ icon, text, collapsed }) => (
//   <li className="sidenav-nav-item">
//     <a className="sidenav-nav-link">
//       <span className="sidenav-link-icon">
//         <FontAwesomeIcon icon={icon} />
//       </span>
//       <span className="sidenav-link-text" style={{ display: collapsed ? 'block' : 'none' }}>
//         {text}
//       </span>
//     </a>
//   </li>
// );

// export default Sidenav;

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChartBar,
  faFile,
  faUser,
  faSignOutAlt,
  faBell,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import logo from "../components/logo.jpg";

const Sidenav = ({ onToggleSideNav }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);

    if (window.innerWidth <= 768) {
      setCollapsed(false);
      onToggleSideNav({ collapsed: false, screenWidth: window.innerWidth });
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
    <div className={`sidenav ${collapsed ? "sidenav-collapsed" : ""}`}>
      <div className="logo-container">
        <div className="logo">
          <img
            src={logo}
            alt="Logo"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </div>
        <div
          className="logo-text"
          style={{ display: collapsed ? "block" : "none" }}
        >
          NavBar
        </div>
      </div>
      <ul className="sidenav-nav">
        <NavItem icon={faHome} text="Home" collapsed={collapsed} />
        <NavItem icon={faChartBar} text="Analytics" collapsed={collapsed} />
        <NavItem icon={faFile} text="Description" collapsed={collapsed} />
        <NavItem icon={faUser} text="User" collapsed={collapsed} />
        <NavItem icon={faSignOutAlt} text="Logout" collapsed={collapsed} />
        <NavItem icon={faBell} text="Notifications" collapsed={collapsed} />
      </ul>
    </div>
  );
};

const NavItem = ({ icon, text, collapsed }) => (
  <li className="sidenav-nav-item">
    <a className="sidenav-nav-link">
      <span className="sidenav-link-icon">
        <FontAwesomeIcon icon={icon} />
      </span>
      <span
        className="sidenav-link-text"
        style={{ display: collapsed ? "block" : "none" }}
      >
        {text}
      </span>
    </a>
  </li>
);

export default Sidenav;
