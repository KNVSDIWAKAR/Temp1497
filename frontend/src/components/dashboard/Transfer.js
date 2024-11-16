import React, { useState } from "react";
import "../dashboard/Transfer.css";

const Transfer = () => {
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionDetails, setTransactionDetails] = useState([]);
  const [isTransferComplete, setIsTransferComplete] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate account number length
    if (accountNumber.length !== 16) {
      setError("Account number must be 16 digits.");
      return;
    }

    // If validation passes, create a new transaction entry
    setError("");
    const newTransaction = {
      accountName,
      accountNumber,
      amount,
      status: "Completed",
      date: new Date().toLocaleDateString(),
    };

    // Update transaction details with the new entry
    setTransactionDetails([newTransaction]);

    // Set transfer to complete
    setIsTransferComplete(true);
  };

  return (
    <div className="transfer-container">
      <form onSubmit={handleSubmit} className="transfer-form">
        <div className="form-group">
          <label htmlFor="accountName">Account Name</label>
          <input
            type="text"
            id="accountName"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
            placeholder="Enter Account Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="accountNumber">Account Number</label>
          <input
            type="text"
            id="accountNumber"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            placeholder="Enter Account Number"
            maxLength="16"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount"
            required
          />
        </div>
        <div className="form-group">
          <label>Transfer Option</label>
          <select>
            <option value="sending">Sent Money</option>
            <option value="receving">Received</option>
            <option value="receving">Subscription</option>
            <option value="receving">Merchant</option>
            <option value="receving">Salary</option>
            <option value="receving">E-commerce Payment</option>
          </select>
        </div>
        <button type="submit" className="btn-transfer">
          Transfer
        </button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {isTransferComplete && (
        <div className="transaction-summary">
          <h3>Transaction Details</h3>
          <table className="transaction-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Account Name</th>
                <th>Account Number</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactionDetails.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.date}</td>
                  <td>{transaction.accountName}</td>
                  <td>{transaction.accountNumber}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Transfer;
