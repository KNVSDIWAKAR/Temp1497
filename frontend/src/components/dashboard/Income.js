import React, { useState } from "react";
import "../dashboard/Styles/Transfer.css";
import SideBar from "./SideBar";

const Income = () => {
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [transferDate, setTransferDate] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (accountNumber.length !== 16) {
      setError("Account number must be 16 digits.");
      return;
    }

    setError("");
    setSuccessMessage("");

    const incomeData = {
      accountName,
      accountNumber,
      amount,
      date: transferDate || new Date().toISOString().split("T")[0],
      note,
      status: "Completed",
    };

    try {
      const response = await fetch("http://localhost:814/api/postincome", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(incomeData),
      });

      if (response.ok) {
        const result = await response.json();
        setSuccessMessage("Income transaction saved successfully!");
        setAccountName("");
        setAccountNumber("");
        setAmount("");
        setTransferDate("");
        setNote("");
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setError("Unable to connect to the server. Please try again later.");
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
              placeholder="Enter Note"
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
              <option value="salary">Salary</option>
            </select>
          </div>
          <button type="submit" className="btn-transfer">
            Save
          </button>
        </form>

        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </div>
  );
};

export default Income;
