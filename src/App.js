// App.js
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection/MainSection";
import "./App.css";

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
     
        <Navbar onToggleSideNav={handleToggleSideNav} />
        <MainSection />
      </div>
    </div>
  );
}

export default App;
