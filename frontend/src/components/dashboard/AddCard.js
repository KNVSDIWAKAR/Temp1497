import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import visaLogo from "../Asserts/visa.png";
import mastercardLogo from "../Asserts/mastercard.png";
import rupayLogo from "../Asserts/rupay.png";

const AddCard = () => {
  const [cardData, setCardData] = useState({
    bankName: "",
    cardHolder: "",
    cardType: "Debit Card",
    paymentNetwork: "Visa",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [showCvv, setShowCvv] = useState(false); // State to toggle CVV visibility
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardData({ ...cardData, [name]: value });
  };

  const getPaymentNetworkLogo = () => {
    switch (cardData.paymentNetwork) {
      case "Visa":
        return visaLogo;
      case "MasterCard":
        return mastercardLogo;
      case "RuPay":
        return rupayLogo;
      default:
        return "";
    }
  };

  // Determine the card background color based on the card type
  const cardBackgroundColor =
    cardData.cardType === "Debit Card" ? "#4a90e2" : "#28a745";

  const handleGoBack = () => {
    navigate("/dashboard"); // Navigate to the "/dashboard" route
  };

  return (
    <div className="add-card-container" style={{ padding: "20px" }}>
      {/* Go Back Button */}
      <button
        onClick={handleGoBack}
        style={{
          padding: "10px 20px",
          backgroundColor: "#f0ad4e",
          color: "#fff",
          borderRadius: "5px",
          marginBottom: "20px",
          cursor: "pointer",
        }}
      >
        Go Back
      </button>

      {/* Card Display */}
      <div className="flex flex-col items-center mb-8">
        <div
          className="bank-card-display"
          style={{
            position: "relative",
            padding: "20px",
            backgroundColor: cardBackgroundColor,
            color: "#fff",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            width: "300px",
          }}
        >
          <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
            {cardData.bankName || "Bank Name"}
          </h2>
          <p style={{ marginTop: "10px", fontSize: "18px" }}>
            {cardData.cardHolder || "Card Holder Name"}
          </p>
          <p style={{ marginTop: "20px", fontSize: "18px" }}>
            {cardData.cardNumber
              ? `${cardData.cardNumber.replace(/\d{4}(?=.)/g, "$& ")}`
              : "●●●● ●●●● ●●●● ●●●●"}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <span>{cardData.expiryDate || "MM/YY"}</span>
            <span>{showCvv ? cardData.cvv : "●●●"}</span>
          </div>
          <div style={{ position: "absolute", top: "10px", right: "10px" }}>
            {getPaymentNetworkLogo() && (
              <img
                src={getPaymentNetworkLogo()}
                alt={cardData.paymentNetwork}
                width={40}
                height={24}
              />
            )}
          </div>
        </div>
      </div>

      {/* Card Details Form */}
      <form
        className="card-details-form"
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          padding: "20px",
          backgroundColor: "#f5f5f5",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Bank Name
          </label>
          <input
            type="text"
            name="bankName"
            value={cardData.bankName}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
            placeholder="Enter bank name"
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Card Holder Name
          </label>
          <input
            type="text"
            name="cardHolder"
            value={cardData.cardHolder}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
            placeholder="Enter card holder name"
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Type</label>
          <select
            name="cardType"
            value={cardData.cardType}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
          >
            <option value="Debit Card">Debit Card</option>
            <option value="Credit Card">Credit Card</option>
          </select>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Payment Network
          </label>
          <select
            name="paymentNetwork"
            value={cardData.paymentNetwork}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
          >
            <option value="Visa">Visa</option>
            <option value="MasterCard">MasterCard</option>
            <option value="RuPay">RuPay</option>
          </select>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Card Number
          </label>
          <input
            type="text"
            name="cardNumber"
            value={cardData.cardNumber}
            onChange={handleChange}
            maxLength="16"
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
            placeholder="Enter card number"
          />
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <div style={{ marginBottom: "15px", flex: "1" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Expiry Date
            </label>
            <input
              type="month"
              name="expiryDate"
              value={cardData.expiryDate}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "5px",
                border: "1px solid #ddd",
              }}
              placeholder="MM/YY"
            />
          </div>

          <div style={{ marginBottom: "15px", flex: "1" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>CVV</label>
            <input
              type={showCvv ? "text" : "password"} // Change input type based on showCvv state
              name="cvv"
              value={cardData.cvv}
              onChange={handleChange}
              maxLength="3"
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "5px",
                border: "1px solid #ddd",
              }}
              placeholder="CVV"
              onFocus={() => setShowCvv(true)} // Show CVV on focus
              onBlur={() => setShowCvv(false)} // Hide CVV on blur
            />
          </div>
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#4a90e2",
            color: "#fff",
            borderRadius: "5px",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
          }}
        >
          Save Card
        </button>
      </form>
    </div>
  );
};

export default AddCard;
