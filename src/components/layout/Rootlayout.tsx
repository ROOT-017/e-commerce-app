import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Modal from "../modal/Modal";

import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import CartModal from "../cart/CartModal";

import Footer from "../footer/Footer";

const RootLayout = () => {
  const { isModal, isCartModal, isSpinder } = useSelector(
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
    if (!isCartModal || !isSpinder) {
      document.body.style.overflow = "unset";
    }
    if (isCartModal || isSpinder) {
      document.body.style.overflow = "hidden";
    }
  }, [isCartModal, isSpinder]);
  return (
    <div className="lg:px-12">
      <CartModal />
      <Modal />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
