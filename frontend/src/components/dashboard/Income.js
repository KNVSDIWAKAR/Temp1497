import React, { useState } from "react";
import "../dashboard/Styles/Transfer.css";
import SideBar from "./SideBar";
const Income = () => {
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionDetails, setTransactionDetails] = useState([]);
  const [isTransferComplete, setIsTransferComplete] = useState(false);
  const [error, setError] = useState("");
  const [transferDate, setTransferDate] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (accountNumber.length !== 16) {
      setError("Account number must be 16 digits.");
      return;
    }

    setError("");
    const newTransaction = {
      accountName,
      accountNumber,
      amount,
      status: "Completed",
      date: transferDate || new Date().toLocaleDateString(),
      note,
    };

    setTransactionDetails([newTransaction]);

    setIsTransferComplete(true);
  };

  return (
    <div className="transfercontainer">
      <SideBar />
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
            <label htmlFor="transferDate">Date</label>
            <input
              type="date"
              id="transferDate"
              value={transferDate}
              onChange={(e) => setTransferDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="note">Note</label>
            <textarea
              id="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Enter Note "
              rows="3"
              style={{
                backgroundColor: "#1e1e1f",
                color: "white",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "10px",
              }}
            ></textarea>
          </div>
          <div className="form-group">
            <label>Transfer Option</label>
            <select>
              <option value="receiving">Received</option>
              <option value="salary">Salary</option>ss
            </select>
          </div>
          <button type="submit" className="btn-transfer">
            Save
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
                  <th>Note</th>
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
                    <td>{transaction.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Income;
