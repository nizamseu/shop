import React from "react";
import { Outlet } from "react-router";
import DashBoardNav from "../DashBoardNav/DashBoardNav";

const Dashboard = () => {
  return (
    <div>
      <DashBoardNav></DashBoardNav>
      <Outlet />
    </div>
  );
};

export default Dashboard;
