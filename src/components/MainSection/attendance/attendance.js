import React, { useState } from "react";
import "./attendance.css";

const Attendance = () => {
  const [employeeContribution, setEmployeeContribution] = useState(5); // Initial value for employee contribution
  const [retirementAge, setRetirementAge] = useState(65); // Initial value for retirement age

  return (
    <div className="wrapper">
      <div className="box1">
        <h2>Retirement Strategy</h2>
        <div>
          <h4 className="head">Employee Contribution:</h4>
          <div className="inputt">
            <input
              type="range"
              min="1"
              max="20"
              value={employeeContribution}
              onChange={(e) => setEmployeeContribution(e.target.value)}
            />
            <h4>{employeeContribution}%</h4>
          </div>
        </div>
        <div>
          <h4 className="head">Retirement Age:</h4>
          <div className="inputt">
            <input
              type="range"
              min="1"
              max="100"
              value={retirementAge}
              onChange={(e) => setRetirementAge(e.target.value)}
            />
            <h4>{retirementAge}</h4>
          </div>
        </div>
        <hr></hr>
        <div className="info">
          <h4>Employee Contribution</h4>
          <h4>8.4%</h4>
        </div>
        <div className="info">
          <h4>Interest Rate </h4>
          <h4>5%</h4>
        </div>
        <div className="upbutton">
        <button class="update-button">Update</button>
        </div>
        <div className="link">
          <a
            target="_blank"
            href="https://legacy.reactjs.org/docs/getting-started.html"
          >
            View Help Docs/
          </a>
        </div>
      </div>
      <div class="line-container">
        <div class="vertical-line"></div>
        <div class="text-container">
          <p>
            Are you considering a<br></br>
            <b>House Advance?</b>
            <br></br>
          </p>
          <h4>Limited time reduced intrest</h4>
          <div className="link2">
            <a
              target="_blank"
              href="https://legacy.reactjs.org/docs/getting-started.html"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
