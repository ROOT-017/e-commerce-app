import React, { useEffect } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "../navigation/Navbar";
import Modal from "../Modal/Modal";
import Home from "../../pages/Home";

import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import CartModal from "../cart/CartModal";

import Footer from "../footer/Footer";

const RootLayout = () => {
  const { isModal, isCartModal } = useSelector(
    (state: RootState) => state.modal
  );
  useEffect(() => {
    if (!isModal) {
      document.body.style.overflow = "unset";
    }
    if (isModal) {
      document.body.style.overflow = "hidden";
    }
  }, [isModal]);

  useEffect(() => {
    if (!isCartModal) {
      document.body.style.overflow = "unset";
    }
    if (isCartModal) {
      document.body.style.overflow = "hidden";
    }
  }, [isCartModal]);
  return (
    <div className="lg:px-12">
      <CartModal />

      <Modal />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
