// App.js
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection/MainSection";
import "./App.css";
import bNavbar from "./components/MainSection/bnav/bNavbar";
function App() {
  const [sideNavToggle, setSideNavToggle] = useState({
    screenWidth: 0,
    collapsed: false,
  });

  const handleToggleSideNav = (toggle) => {
    setSideNavToggle(toggle);
  };

  return (
    <div className="App">
      <div className="container">
        <bNavbar />
        <Navbar onToggleSideNav={handleToggleSideNav} />
        <MainSection />
      </div>
    </div>
  );
}

export default App;
