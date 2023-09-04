import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import {
  Navigate,
  Route,
  RouterProvider,
  Routes,
  useLocation,
} from "react-router-dom";

// import Router from "./routes/Router";
import ProductCategories from "./pages/ProductCategories";
import ProductsPage from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import CategoriesDetails from "./pages/CategoriesDetails";

import Navbar from "./components/navigation/Navbar";
import CartModal from "./components/cart/CartModal";
import Modal from "./components/modal/Modal";
import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./components/layout/Rootlayout";
import { Toast } from "primereact/toast";

import { useAppDispatch, useAppSelector } from "./store/hooks";
import Signin from "./pages/Signin";
import AuthLayout from "./pages/AuthLayout";
import Signup from "./pages/Signup";
import { auth } from "./auth/firebase";
import { signin } from "./store/authSlice";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SuccessPage from "./pages/Success";
import SuccessCheck from "./pages/ProtectPurchased";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISH_KEY!);

const App = () => {
  const dispatch = useAppDispatch();
  const { isToast } = useAppSelector((state) => state.modal);
  const location = useLocation();
  const toast = useRef<any>(null);

  useEffect(() => {
    if (!isToast) return;
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Item added to cart",
      life: 3000,
    });
  }, [isToast]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        user.getIdToken().then((token) => {
          dispatch(
            signin({
              email: user.email!,
              uid: user.uid,
              token: token,
            })
          );
        });
      }
    });
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // const stripeOptions = {
  //   clientSecret: process.env.REACT_APP_STRIPE_CLIENT_ID,
  //   fonts: [
  //     {
  //       cssSrc: "https://fonts.googleapis.com/css?family=Roboto",
  //     },
  //   ],
  // };

  return (
    <>
      {<Toast ref={toast} />} <CartModal />
      <Modal />
      <Navbar />
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/products" element={<ProductsPage />}>
            <Route index element={<ProductCategories />}></Route>
            <Route
              path="categories/:category"
              element={<CategoriesDetails />}
            ></Route>
            <Route path=":category/:id" element={<ProductDetail />}></Route>
          </Route>
          <Route
            path="/checkout"
            element={<h1>This s the checkout page</h1>}
          ></Route>
        </Route>
        <Route
          path="/purchase/success"
          element={<SuccessCheck children={<SuccessPage />} />}
        ></Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Signin />}></Route>
          <Route path="signin" element={<Signin />}></Route>
          <Route path="signup" element={<Signup />}></Route>
        </Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
};

export default App;
