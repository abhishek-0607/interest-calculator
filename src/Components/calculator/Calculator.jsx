import React, { useEffect, useState } from "react";
import "./calculator.css";
import "./rangeInput.css";
import DoughnutChart from "../DoughnutChart";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
Chart.register(CategoryScale);

export const Calculator = () => {
  const [inputAmount, setInputAmount] = useState(25000);
  const [amount, setAmount] = useState(25000);
  const handleInputChange = (e) => setInputAmount(Number(e.target.value));
  const handleRangeChange = (e) => setInputAmount(e.target.value);
  useEffect(() => {
    const delay = setTimeout(() => {
      setAmount(inputAmount);
    }, 1000);

    return () => clearTimeout(delay);
  }, [inputAmount]);
  return (
    <div className="calculator">
      <div className="mainTitle">
        <p>Interest Calculator</p>
      </div>
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
                value={inputAmount}
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
              value={inputAmount}
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
        </div>

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
          {/* <div className="interestChild"></div> */}
        </div>

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
