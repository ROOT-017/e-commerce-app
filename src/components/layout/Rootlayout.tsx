import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navigation/Navbar";
import Modal from "../Modal/Modal";

import { RootState } from "../../store";
import { useSelector } from "react-redux";

const RootLayout = () => {
  const { isModal } = useSelector((state: RootState) => state.modal);
  useEffect(() => {
    if (!isModal) {
      document.body.style.overflow = "unset";
    }
    if (isModal) {
      document.body.style.overflow = "hidden";
    }
  }, [isModal]);
  return (
    <div className="lg:px-12">
      <Modal />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
