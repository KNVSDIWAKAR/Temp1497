import React from "react";
import "../dashboard/Styles/MyCards.css";

function MyCards() {
  return (
    <section className="my-cards">
      <div className="cards">
        <div className="card-item blue-card">
          <div className="chip"></div>
          <div className="mastercard-logo"></div>
          <div className="card-number">1234 5678 9012 3456</div>
          <div className="card-id">1234</div>
          <div className="card-footer">
            <div className="card-holder">
              <span>Card Holder</span>
              <strong>Nur Alam</strong>
            </div>
            <div className="expiry-date">
              <span>Expiry Date</span>
              <strong>04/2025</strong>
            </div>
          </div>
        </div>

        <div className="card-item green-card">
          <div className="chip"></div>
          <div className="mastercard-logo"></div>
          <div className="card-number">1234 5678 9012 3456</div>
          <div className="card-id">1234</div>
          <div className="card-footer">
            <div className="card-holder">
              <span>Card Holder</span>
              <strong>Nur Alam</strong>
            </div>
            <div className="expiry-date">
              <span>Expiry Date</span>
              <strong>04/2025</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyCards;
