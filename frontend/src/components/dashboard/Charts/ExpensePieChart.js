import React from "react";
import { Pie } from "react-chartjs-2";

const ExpensePieChart = () => {
  const data = {
    labels: ["Rent", "Utilities", "Groceries", "Entertainment", "Other"],
    datasets: [
      {
        data: [30, 10, 25, 20, 15],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
};

export default ExpensePieChart;
