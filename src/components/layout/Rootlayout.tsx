import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Modal from "../modal/Modal";

import { RootState } from "../../store/store";
import CartModal from "../cart/CartModal";
import Footer from "../footer/Footer";
import { useAppSelector } from "../../store/hooks";

const RootLayout = () => {
  const { isModal, isCartModal } = useAppSelector(
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
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
