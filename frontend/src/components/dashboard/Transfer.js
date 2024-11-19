import React, { useState } from "react";
import "../dashboard/Styles/Transfer.css";
import SideBar from "./SideBar";

const Transfer = () => {
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [transferDate, setTransferDate] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
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
      date: transferDate || new Date().toLocaleDateString(),
      note,
    };

    try {
      const response = await fetch("http://localhost:814/api/posttransaction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTransaction),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Failed to save transaction.");
      } else {
        alert("Transaction saved successfully!");
        setAccountName("");
        setAccountNumber("");
        setAmount("");
        setTransferDate("");
        setNote("");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    }
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
              <option value="sending">Sent Money</option>
              <option value="subscription">Subscription</option>
              <option value="merchant">Merchant</option>
              <option value="ecommerce">E-commerce Payment</option>
            </select>
          </div>
          <button type="submit" className="btn-transfer">
            Save
          </button>
        </form>

        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Transfer;
