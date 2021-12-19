import { Box } from "@mui/system";
import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import Products from "../Products/Products";
import Common from "./Common";

const Home = () => {
  return (
    <div>
      <Products></Products>
    </div>
  );
};

export default Home;
