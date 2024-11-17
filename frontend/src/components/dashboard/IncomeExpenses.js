import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "../dashboard/Styles/IncomeExpenses.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function IncomeExpenses() {
  const [timeframe, setTimeframe] = useState("7 Days");

  const weeklyData = {
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        label: "Income",
        data: [5000, 4000, 6000, 8500, 7000, 8000, 9500],
        borderColor: "#b18ce4", // Purple color for Income
        backgroundColor: "rgba(177, 140, 228, 0.2)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Expense",
        data: [3000, 3500, 3000, 3156, 4000, 3500, 4200],
        borderColor: "#94e7ce", // Green color for Expense
        backgroundColor: "rgba(148, 231, 206, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const yearlyData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Income",
        data: [
          50000, 52000, 58000, 60000, 55000, 58000, 60000, 62000, 63000, 65000,
          67000, 70000,
        ],
        borderColor: "#b18ce4", // Purple color for Income
        backgroundColor: "rgba(177, 140, 228, 0.2)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Expense",
        data: [
          30000, 35000, 32000, 34000, 36000, 38000, 40000, 42000, 44000, 46000,
          48000, 50000,
        ],
        borderColor: "#94e7ce",
        backgroundColor: "rgba(148, 231, 206, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const data = timeframe === "7 Days" ? weeklyData : yearlyData;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          usePointStyle: true,
          boxWidth: 8,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += `$${context.parsed.y.toLocaleString()}`;
            }
            return label;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return "$" + value / 1000 + "K";
          },
        },
      },
    },
  };

  const chartWrapperStyle = {
    borderRadius: "5px",
    backgroundColor: "#282829",
    boxSizing: "border-box",
  };

  return (
    <div className="income-expense-graph">
      <div className="header">
        <div className="dropdowns">
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="dropdown"
          >
            <option value="7 Days">7 Days</option>
            <option value="1 Year">1 Year</option>
          </select>
        </div>
      </div>
      <div style={chartWrapperStyle}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default IncomeExpenses;
