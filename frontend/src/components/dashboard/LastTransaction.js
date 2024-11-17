import React from "react";
import "../dashboard/Styles/LastTransaction.css";

const transactions = [
  {
    id: 1,
    name: "Courtney Henry",
    type: "Send Money",
    amount: -120,
    dateTime: "01/09/2024 10:00 AM",
  },
  {
    id: 2,
    name: "Guy Hawkins",
    type: "Send Money",
    amount: -1200,
    dateTime: "01/09/2024 09:40 AM",
  },
  {
    id: 3,
    name: "Figma",
    type: "Subscription",
    amount: -900,
    dateTime: "01/09/2024 09:05 AM",
  },
  {
    id: 4,
    name: "Courtney Henry",
    type: "Send Money",
    amount: -70,
    dateTime: "01/09/2024 08:00 AM",
  },
  {
    id: 5,
    name: "Savannah Nguyen",
    type: "Send Money",
    amount: -490,
    dateTime: "01/09/2024 07:00 AM",
  },
  {
    id: 6,
    name: "Netflix",
    type: "Subscription",
    amount: -25,
    dateTime: "01/09/2024 05:00 AM",
  },
  {
    id: 7,
    name: "Cameron Williamson",
    type: "Received Money",
    amount: 25,
    dateTime: "01/09/2024 12:00 AM",
  },
  {
    id: 8,
    name: "Savannah Nguyen",
    type: "Received Money",
    amount: 490,
    dateTime: "31/08/2024 10:00 PM",
  },
  {
    id: 9,
    name: "Daraz",
    type: "E-commerce Payment",
    amount: -25,
    dateTime: "31/08/2024 04:00 PM",
  },
  {
    id: 10,
    name: "Leslie Alexander",
    type: "Received Money",
    amount: 900,
    dateTime: "31/08/2024 02:00 PM",
  },
  {
    id: 11,
    name: "Ralph Edwards",
    type: "Received Money",
    amount: 640,
    dateTime: "31/08/2024 10:00 AM",
  },
];

const LastTransaction = () => {
  return (
    <div className="transaction-list-container">
      <h1
        style={{
          textAlign: "center",
          color: "grey",
        }}
      >
        Transactions
      </h1>
      <div className="transaction-list">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="transaction-item">
            <div className="transaction-left">
              <div className="transaction-name">{transaction.name}</div>
              <div className="transaction-type">{transaction.type}</div>
            </div>
            <div className="transaction-right">
              <div className="transaction-amount">
                <span
                  className={transaction.amount < 0 ? "negative" : "positive"}
                >
                  {transaction.amount < 0 ? "-" : "+"}$
                  {Math.abs(transaction.amount)}
                </span>
              </div>
              <div className="transaction-date-time">
                {transaction.dateTime}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastTransaction;
