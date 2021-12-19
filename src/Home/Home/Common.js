import React from "react";

import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import Products from "../Products/Products";

const Common = ({ children }) => {
  return (
    <div>
      {/* {children} */}
      <Outlet></Outlet>
    </div>
  );
};

export default Common;
