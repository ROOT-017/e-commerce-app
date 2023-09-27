import React, { useEffect, useRef } from "react";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";

// import Router from "./routes/Router";
import ProductCategories from "./pages/ProductCategories";
import ProductsPage from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import CategoriesDetails from "./pages/CategoriesDetails";

import Navbar from "./components/navigation/Navbar";
import CartModal from "./components/cart/CartModal";
import Modal, { ConstomModal } from "./components/modal/Modal";
import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./components/layout/Rootlayout";
import { Toast } from "primereact/toast";

import { useAppDispatch, useAppSelector } from "./store/hooks";
import Signin from "./pages/Signin";
import AuthLayout from "./pages/AuthLayout";
import Signup from "./pages/Signup";
import { auth } from "./auth/firebase";
import { signin } from "./store/authSlice";
import SuccessPage from "./pages/Success";
import SuccessCheck from "./pages/ProtectPurchased";

import Spinder from "./components/ui/Spinder";

const App = () => {
  const dispatch = useAppDispatch();
  const { isToast, isSpinder } = useAppSelector((state) => state.modal);
  const location = useLocation();
  const toast = useRef<Toast>(null);

  //Change title of page based on route
  useEffect(() => {
    const title = location.pathname.split("/")[1].toUpperCase();
    document.title = title ? `ShopCart | ` + title : `ShopCart | HOME `;
  }, [location]);

  useEffect(() => {
    if (!isToast.value) return;
    toast.current?.show(isToast.options);
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


  return (
    <>
      {isToast.value && <Toast ref={toast} />}
      <CartModal />
      {isSpinder && (
        <>
          <ConstomModal>
            <>
              <Spinder />
            </>
          </ConstomModal>
        </>
      )}
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
