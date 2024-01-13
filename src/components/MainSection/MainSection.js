// MainSection.js

import React from "react";
import "../MainSection/MainSection.css";
import "../MainSection/Maintop/Maintop.js";
import "../MainSection/users/users.js";
import "../MainSection/attendance/attendance.js";
import Maintop from "../MainSection/Maintop/Maintop.js";
import Attendance from "../MainSection/attendance/attendance";
import Users from "../MainSection/users/users.js";

const MainSection = ({ isSideNavCollapsed }) => {
  return (
    <section className={`main ${isSideNavCollapsed ? "main-collapsed" : ""}`}>
      <div className="content">
        <div className="main-top">
          <Maintop />
        </div>
        <div className="users">
          <Users />
        </div>
        <div className="attendance">
          <div className="attendance-list">
            <Attendance />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
