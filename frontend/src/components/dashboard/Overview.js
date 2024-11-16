import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import "./Overveiw.css";
import Balance from "../Asserts/Balance.png";
import Savings from "../Asserts/Savings.png";
import Income from "../Asserts/Income.png";
import Expenses from "../Asserts/Expenses.png";

function Overview() {
  const [financeData, setFinanceData] = useState({
    balance: 0,
    income: 0,
    savings: 0,
    expenses: 0,
  });

  useEffect(() => {
    // Get the username from localStorage
    const username = localStorage.getItem("username");
    const data = {
      username,
    };
    console.log(username);
    // Fetch the financial data from the server using the username
    axios
      .post(`http://localhost:814/user/data`, data)
      .then((response) => {
        if (response.data.success) {
          setFinanceData(response.data.data);
        } else {
          console.error("Failed to fetch financial data");
        }
      })
      .catch((error) => {
        console.error("Error fetching financial data", error);
      });
  }, []);

  return (
    <section>
      <h3>Overview</h3>
      <section className="overview">
        <div className="card balance">
          <div className="icon-container balance-icon">
            <img src={Balance} alt="Balance Icon" />
          </div>
          <div className="details">
            <h4>${financeData.balance}</h4>
            <p>Balance</p>
          </div>
          <span className="percentage">⬈ 10.8%</span>
        </div>
        <div className="card income">
          <div className="icon-container income-icon">
            <img src={Income} alt="Income Icon" />
          </div>
          <div className="details">
            <h4>${financeData.income}</h4>
            <p>Income</p>
          </div>
          <span className="percentage negative">⬊ 3.2%</span>
        </div>
        <div className="card savings">
          <div className="icon-container savings-icon">
            <img src={Savings} alt="Savings Icon" />
          </div>
          <div className="details">
            <h4>${financeData.savings}</h4>
            <p>Savings</p>
          </div>
          <span className="percentage">⬈ 2.5%</span>
        </div>
        <div className="card expenses">
          <div className="icon-container expenses-icon">
            <img src={Expenses} alt="Expenses Icon" />
          </div>
          <div className="details">
            <h4>${financeData.expenses}</h4>
            <p>Expenses</p>
          </div>
          <span className="percentage">⬈ 2.5%</span>
        </div>
      </section>
    </section>
  );
}

export default Overview;
