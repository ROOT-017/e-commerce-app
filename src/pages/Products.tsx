import React from "react";
import { Outlet } from "react-router-dom";

const ProductsPage = () => {
  return (
    <div className=" lg:px-0 px-2 pt-4 lg:pt-8 ">
      <Outlet />
    </div>
  );
};

export default ProductsPage;
