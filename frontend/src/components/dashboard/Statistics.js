import React, { useState } from "react";
import SideBar from "./SideBar";
import "../dashboard/Styles/Statistics.css";
import IncomeGraph from "./Charts/IncomeGraph.js";
import ExpenseGraph from "./Charts/ExpenseGraph.js";
import IncomePieChart from "./Charts/IncomePieChart .js";
import ExpensePieChart from "./Charts/ExpensePieChart.js";

const Statistics = ({ handleAuthentication }) => {
  const [isIncome, setIsIncome] = useState(true); // State to track the selected category

  const handleSliderChange = (event) => {
    setIsIncome(event.target.value === "income");
  };

  return (
    <div className="OuterContainer">
      <SideBar handleAuthentication={handleAuthentication} />
      <div className="InnerContainer">
        <div className="statisticsTop">
          <div className="slider-container">
            <input
              type="radio"
              id="income"
              name="category"
              value="income"
              checked={isIncome}
              onChange={handleSliderChange}
            />
            <label htmlFor="income">Income</label>
            <input
              type="radio"
              id="expense"
              name="category"
              value="expense"
              checked={!isIncome}
              onChange={handleSliderChange}
            />
            <label htmlFor="expense">Expenses</label>
          </div>
        </div>

        {/* Display based on selected option */}
        <div className="statisticsBottom">
          {isIncome ? (
            <>
              <div className="income-graph-container">
                <h3>Income Graph</h3>
                <IncomeGraph />
              </div>
              <div className="income-pie-chart-container">
                <h3>Income Distribution</h3>
                <IncomePieChart />
              </div>
            </>
          ) : (
            <>
              <div className="expense-graph-container">
                <h3>Expense Graph</h3>
                <ExpenseGraph />
              </div>
              <div className="expense-pie-chart-container">
                <h3>Expense Distribution</h3>
                <ExpensePieChart />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
