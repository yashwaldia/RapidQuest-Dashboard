import React, { useState } from "react";
import "./Maintop.css";

const Maintop = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const options = ["1", "2", "3"];

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    closeDropdown(); // Close the dropdown after selecting an option
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="welcome-section">
      <div className="message">
        <div className="avatari">
          <img
            className="avatar"
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>
        <div className="text">
          <h1>Hi Mike,</h1>
          <h4>welcome back.</h4>
        </div>
      </div>
      <div className="today-transaction">
        <div className="amount">
          <div className="amountt">
            <div>
              <h3>Today</h3>
              <h1>$19,892</h1>
              <h4>Account BaLance</h4>
            </div>
            <div className="sub">
              <div>
                <h3>$4,000</h3>
                <h4>Year-to-Date Contributions</h4>
              </div>
              <div>
                <h3>$19,892</h3>
                <h4>Total Interest</h4>
              </div>
            </div>
          </div>
          <div className="dropdown-container" id="myDropdown">
            <button className="dropdown-button" onClick={toggleDropdown}>
              I want to<span className="arrow-down">&#9660;</span>
            </button>

            <ul className="dropdown-list">
              <li onClick={() => handleOptionChange("Option 1")}>Option 1</li>
              <li onClick={() => handleOptionChange("Option 2")}>Option 2</li>
              <li onClick={() => handleOptionChange("Option 3")}>Option 3</li>
            </ul>
          </div>
        </div>

        <div className="recent">
          <h3>Recent Transactions</h3>
          <div className="transactions">
            <h4>2020-08-07</h4>
            <h3>Withdrawal Transfer to Bank-XXX11</h3>
            <hr></hr>
          </div>
          <div className="transactions">
            <h4>2020-08-07</h4>
            <h3>Withdrawal Transfer to Bank-XXX11</h3>
            <hr></hr>
          </div>
          <div className="transactions">
            <h4>2020-08-07</h4>
            <h3>Withdrawal Transfer to Bank-XXX11</h3>
            <hr></hr>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maintop;
