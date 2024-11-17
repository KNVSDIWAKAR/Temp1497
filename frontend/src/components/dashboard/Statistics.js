import React from "react";
import SideBar from "./SideBar";
import "../dashboard/Styles/Statistics.css";
import IncomeGraph from "./Charts/IncomeGraph";
import ExpenseGraph from "./Charts/ExpenseGraph";
import IncomePieChart from "./Charts/IncomePieChart ";
import ExpensePieChart from "./Charts/ExpensePieChart";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Line, Pie } from "react-chartjs-2";

// Register necessary Chart.js components
Chart.register(ArcElement, Tooltip, Legend);

const Statistics = () => {
  return (
    <div className="OuterContainer">
      <SideBar />
      <div className="InnerContainer">
        <div className="statisticsTop">
          <div className="income-graph-container">
            <h3>Income Graph</h3>
            <IncomeGraph />
          </div>
          <div className="expense-graph-container">
            <h3>Expense Graph</h3>
            <ExpenseGraph />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="statisticsBottom">
          <div className="income-pie-chart-container">
            <h3>Income Distribution</h3>
            <IncomePieChart />
          </div>
          <div className="expense-pie-chart-container">
            <h3>Expense Distribution</h3>
            <ExpensePieChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
