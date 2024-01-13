import React, { useState } from "react";
import "../users/users.css";
import StackedGraph from "../users/StackedGraph/StackedGraph.js"; // Adjust the import path based on your project structure
import { Circle } from "rc-progress";

const Users = () => {
  const [selectedAge, setSelectedAge] = useState("");

  const style = {
    width: 150,
    display: "inline-block",
    marginRight: 20,
    marginLeft: 20,
  };

  const ageOptions = ["Under 20", "20-30", "30-40", "40-50", "50 and above"];

  const handleAgeChange = (event) => {
    setSelectedAge(event.target.value);
  };

  const [selectedSalary, setSelectedSalary] = useState("");

  const SalaryOptions = [
    "Under 20k",
    "20k-30k",
    "30k-40k",
    "40k-50k",
    "50k and above",
  ];

  const handleSalaryChange = (event) => {
    setSelectedSalary(event.target.value);
  };

  const [selectedgender, setSelectedgender] = useState("");

  const genderOptions = ["Under 20", "20-30", "30-40", "40-50", "50 and above"];

  const handlegenderChange = (event) => {
    setSelectedgender(event.target.value);
  };

  return (
    <div className="maindiv">
      <div className="income">
        <div>
          <h4>Retirement Income</h4>
          <h3>Starting Year 2056</h3>
        </div>
        <div className="goal">
          <div className="goals">
            <h1>$300,000</h1>
            <h4>Account BaLance</h4>
            <hr></hr>
          </div>
          <div className="goalsp">
            <div className="goals">
              <h1>59%</h1>
              <h4>Goal Achieved</h4>
              <hr></hr>
            </div>
            <div className="goals">
              <h1>$300</h1>
              <h4>Est. Monthly income</h4>
              <hr></hr>
            </div>
          </div>
        </div>
      </div>

      {/* 2rd component */}
      <div className="reactgraph">
        <h4>Contribution Overtime</h4>
        <div className="graph">
          <StackedGraph />
        </div>
      </div>

      {/* 3rd component */}

      <div className="peers">
        <div>
          <h3>How do I compare to my peers?</h3>
          <h4>These numbers represent current goal achievement</h4>
        </div>
        <div className="data">
          <div className="drop">
            <div className="list">
              <label
                htmlFor="age"
                style={{ display: "inline-block", marginRight: "10px" }}
              >
                Age:
              </label>
              <select
                id="age"
                style={{
                  border: "none", // Remove the border
                }}
                value={selectedAge}
                onChange={handleAgeChange}
              >
                <option value="">Select age </option>
                {ageOptions.map((option) => (
                  <option
                    key={option}
                    value={option.toLowerCase().replace(" ", "-")}
                  >
                    {option}
                  </option>
                ))}
              </select>

              <hr></hr>
            </div>

            <div className="list">
              <label
                htmlFor="Salary"
                style={{ display: "inline-block", marginRight: "10px" }}
              >
                Salary:
              </label>
              <select
                id="Salary"
                style={{
                  border: "none", // Remove the border
                }}
                value={selectedSalary}
                onChange={handleSalaryChange}
              >
                <option value="">Select Salary</option>
                {SalaryOptions.map((option) => (
                  <option
                    key={option}
                    value={option.toLowerCase().replace(" ", "-")}
                  >
                    {option}
                  </option>
                ))}
              </select>

              <hr></hr>
            </div>

            <div className="list">
              <label
                htmlFor="Gender"
                style={{ display: "inline-block", marginRight: "10px" }}
              >
                Gender:
              </label>
              <select
                id="Gender"
                style={{
                  border: "none", // Remove the border
                }}
                value={selectedgender}
                onChange={handlegenderChange}
              >
                <option value="">Select Gender</option>
                {genderOptions.map((option) => (
                  <option
                    key={option}
                    value={option.toLowerCase().replace(" ", "-")}
                  >
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="circles">
            <div className="circless">
              <Circle
                percent={78}
                trailWidth={3}
                trailColor="#eee"
                strokeWidth={6}
                strokeColor="#CCE5E5"
              />
              <h4>Average</h4>
            </div>
            <div className="circless">
              <Circle
                trailColor="#eee"
                strokeLinecap="round"
                text={`${95}%`}
                percent={95}
                trailWidth={3}
                strokeWidth={6}
                strokeColor="#CCE5E5"
              />
              <h4>Top</h4>
            </div>
            <div className="circless">
              <Circle
                percent={59}
                trailWidth={3}
                trailColor="#eee"
                strokeWidth={6}
                strokeColor="#CCE5E5"
              />
              <h4>Me</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
