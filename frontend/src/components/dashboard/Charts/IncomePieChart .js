import React from "react";
import { Pie } from "react-chartjs-2";

const IncomePieChart = () => {
  const data = {
    labels: ["Salary", "Investments", "Freelancing", "Other"],
    datasets: [
      {
        data: [50, 20, 15, 15],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(54, 162, 235, 0.6)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
};

export default IncomePieChart;
