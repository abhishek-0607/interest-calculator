import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./calculator.css";
import React, { useState } from "react";

export const Calculator = () => {
  const [amount, setAmount] = useState(25000);
  const handleInputChange = (e) => setAmount(Number(e.target.value));
  const handleRangeChange = (e) => setAmount(e.target.value);
  return (
    <div className="calculator">
      <div className="container">
        <div className="left">
          <div className="inputContainer">
            <label>Loan Amount</label>
            <div className="input">
              <div className="logo">
                <FontAwesomeIcon icon={faIndianRupeeSign} />
              </div>
              <input
                className="inputBox"
                type="number"
                min={25000}
                max={500000}
                value={amount}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="slideContainer">
            <input
              className="range"
              type="range"
              min={25000}
              max={500000}
              value={amount}
              onChange={handleRangeChange}
            />
          </div>
          <div className="interestRate">
            <div>
              <span>Interest Rate</span>
            </div>
            <div>
              <span>1% p.m (12% p.a)</span>
            </div>
          </div>
          <div className="interestRate">
            <div>
              <span>Tenure</span>
            </div>
            <div>
              <span>12 months</span>
            </div>
          </div>
          <div className="monthlyInterest">
            <div>
              <span>Monthly Interest</span>
            </div>
            <div>
              <span className="logo2">
                <FontAwesomeIcon icon={faIndianRupeeSign} />
              </span>
              <span>{amount * 0.01}</span>
            </div>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};
