import { createBrowserRouter } from "react-router-dom";
import React, { lazy } from "react";
import RootLayout from "../components/layout/Rootlayout";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import ProductCategories from "../pages/ProductCategories";
import ProductsPage from "../pages/Products";
import CategoriesDetails from "../pages/CategoriesDetails";

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
        path: "products",
        element: <ProductsPage />,
        children: [
          {
            index: true,
            element: <ProductCategories />,
          },
          {
            path: "categories/:category",
            element: <CategoriesDetails />,
          },
          {
            path: ":category/:id",
            element: <ProductDetail />,
          },
        ],
      },
    ],
  },
]);

export default Router;
