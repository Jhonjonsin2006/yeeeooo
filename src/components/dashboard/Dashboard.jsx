import React from "react";
import StatsGrid from "../StatsGrid.jsx";
import ChartSection from "../ChartSection.jsx";

const Dashboard = () => {
  return (
    <div className="space-y-6 p-6">
      <StatsGrid />
      <ChartSection />
    </div>
  );
};

export default Dashboard;
