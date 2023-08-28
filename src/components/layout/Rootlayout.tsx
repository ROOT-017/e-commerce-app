import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navigation/Navbar";

const RootLayout = () => {
  return (
    <div className="lg:px-12">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
