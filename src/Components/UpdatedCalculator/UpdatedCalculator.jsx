import React, { useState } from "react";
import "./range.css";
import "./calculator.css";

import DoughnutChart from "./DoughnutChart";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
Chart.register(CategoryScale);

export const UpdatedCalculator = () => {
  const [amount, setAmount] = useState(25000);
  const handleInputChange = (e) => {
    if (e.target.value < 25000) {
      alert(`amount should be above 25000`);
    } else if (e.target.value > 500000) {
      alert(`amount should be below 500000`);
    } else {
      setAmount(Number(e.target.value));
    }
  };
  const handleRangeChange = (e) => setAmount(e.target.value);
  return (
    <div className="calculator">
      <div className="mainTitle">
        <p>Interest Calculator</p>
      </div>
      <div className="container">
        {/*-------- left start------- */}
        <div className="left">
          <div className="inputContainer">
            <div className="inputTitle">
              <span>Loan Amount</span>
            </div>

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
            <div className="interestRateChild1">
              <span>Interest Rate</span>
            </div>
            <div className="interestRateChild2">
              <span>1% p.m (12% p.a)</span>
            </div>
          </div>
          <div className="interestRate">
            <div className="interestRateChild1">
              <span>Tenure</span>
            </div>
            <div className="interestRateChild2">
              <span>12 months</span>
            </div>
          </div>
        </div>
        {/*------ left end------- */}
        {/*------- right start------- */}
        <div className="right">
          <div className="chartChild">
            <DoughnutChart amount={amount} />
          </div>
          <div className="details">
            <div className="detailsChild">
              <div className="dot">
                <div className="greenDot"></div>
              </div>
              <div className="title">
                <span>Loan Amount</span>
              </div>
              <div className="amount">
                <span className="logo3">
                  <FontAwesomeIcon icon={faIndianRupeeSign} />
                </span>
                <span>{amount}</span>
              </div>
            </div>
            <div className="detailsChild">
              <div className="dot">
                <div className="blueDot"></div>
              </div>
              <div className="title">
                <span>Yearly Interest Amount</span>
              </div>
              <div className="amount">
                <span className="logo3">
                  <FontAwesomeIcon icon={faIndianRupeeSign} />
                </span>
                <span>{Math.ceil(amount * 0.12)}</span>
              </div>
            </div>
          </div>
        </div>
        {/*------right end------- */}
        <div className="monthlyInterest">
          <div>
            <span>Monthly Interest Payment</span>
          </div>
          <div>
            <span className="logo2">
              <FontAwesomeIcon icon={faIndianRupeeSign} />
            </span>
            <span>{Math.ceil(amount * 0.01)}</span>
          </div>
        </div>
      </div>

      <div className="buttonBox">
        <button className="button">
          <span>Get Loan </span>

          <span className="logo4">
            <FontAwesomeIcon icon={faIndianRupeeSign} />
          </span>
        </button>
      </div>
    </div>
  );
};
