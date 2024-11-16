import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/login">Login</Link>
          </li>
          <li className="navbar-item">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="navbar-item">
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
      <div className="landing-page">
        <h1>Landing Page is in Development</h1>
      </div>
    </>
  );
};

export default LandingPage;
