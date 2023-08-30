import { createBrowserRouter } from "react-router-dom";
import React, { lazy } from "react";
import RootLayout from "../components/layout/Rootlayout";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import ProductCategories from "../pages/ProductCategories";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <ProductCategories />,
      },
      {
        path: "/products/:category/:id",
        element: <ProductDetail />,
      },
      {
        path: "/product/categories/:category",
        element: <div>Catery</div>,
      },
    ],
  },
]);

export default Router;
