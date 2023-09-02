import { createBrowserRouter } from "react-router-dom";
import React from "react";
import RootLayout from "../components/layout/Rootlayout";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import ProductCategories from "../pages/ProductCategories";
import ProductsPage from "../pages/Products";
import CategoriesDetails from "../pages/CategoriesDetails";
import ErrorPage from "../pages/ErrorPage";
import AuthLayout from "../pages/AuthLayout";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
// import ProtectedRoute from "../components/ProtectedRou";
// import { Routes } from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
        // action: AppLoader,
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
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Signin />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default Router;
