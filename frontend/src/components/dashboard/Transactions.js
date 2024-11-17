import React from "react";
import SideBar from "./SideBar";
import "../dashboard/Styles/Transactions.css";
const Transactions = () => {
  const transactions = [
    { sNo: 1, name: "John Doe", type: "Credit", amount: "$500" },
    { sNo: 2, name: "Jane Smith", type: "Debit", amount: "$200" },
    { sNo: 3, name: "Alice Johnson", type: "Credit", amount: "$300" },
    { sNo: 4, name: "Michael Brown", type: "Debit", amount: "$150" },
    { sNo: 5, name: "Emily Davis", type: "Credit", amount: "$700" },
    { sNo: 6, name: "Christopher Wilson", type: "Debit", amount: "$250" },
    { sNo: 7, name: "Sophia Martinez", type: "Credit", amount: "$600" },
    { sNo: 8, name: "James Anderson", type: "Debit", amount: "$100" },
    { sNo: 9, name: "Olivia Garcia", type: "Credit", amount: "$400" },
    { sNo: 10, name: "William Thomas", type: "Debit", amount: "$350" },
    { sNo: 11, name: "Isabella Robinson", type: "Credit", amount: "$800" },
    { sNo: 12, name: "Mason Clark", type: "Debit", amount: "$500" },
    { sNo: 13, name: "Evelyn Rodriguez", type: "Credit", amount: "$900" },
    { sNo: 14, name: "Liam Lewis", type: "Debit", amount: "$200" },
    { sNo: 15, name: "Sophia Walker", type: "Credit", amount: "$450" },
  ];

  return (
    <div className="transactionscontainer">
      <SideBar />
      <div className="transactions-container">
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "#3C3C3D ",
                color: "#98844C",
                textAlign: "left",
              }}
            >
              <th style={{ padding: "10px" }}>S.No</th>
              <th style={{ padding: "10px" }}>Name</th>
              <th style={{ padding: "10px" }}>Type</th>
              <th style={{ padding: "10px" }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.sNo} style={{ textAlign: "left" }}>
                <td style={{ padding: "10px", color: "white" }}>
                  {transaction.sNo}
                </td>
                <td style={{ padding: "10px", color: "white" }}>
                  {transaction.name}
                </td>
                <td style={{ padding: "10px", color: "white" }}>
                  {transaction.type}
                </td>
                <td style={{ padding: "10px", color: "white" }}>
                  {transaction.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
