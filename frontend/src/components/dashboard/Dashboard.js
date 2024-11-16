import React from "react";
import "./Dashboard.css";
import Overview from "./Overview";
import MyCards from "./MyCards";
import IncomeExpenses from "./IncomeExpenses";
import LastTransaction from "./LastTransaction";
import SideBar from "./SideBar";
//Diwakar
function Dashboard({ handleAuthentication }) {
  return (
    <div className="dashboard-container">
      <SideBar handleAuthentication={handleAuthentication} />
      <div className="main-content">
        <Overview />
        <div>
          <h3>My Cards</h3>
          <MyCards />
        </div>
        <div>
          <IncomeExpenses />
        </div>
      </div>

      <div className="box3">
        <h3>LastTransaction</h3>
        <LastTransaction />
      </div>
    </div>
  );
}

export default Dashboard;
