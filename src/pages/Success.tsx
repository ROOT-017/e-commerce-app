import React from "react";
import { FiArrowLeftCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import img from "../assets/success.png";

const SuccessPage = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <div className="h-[90vh] flex flex-col justify-center items-center w-full font-poppins">
      <img src={img} alt="success-purchage" />{" "}
      <h1 className="text-2xl text-gray-500">Purchase Successfull</h1>
      <FiArrowLeftCircle
        className="cursor-pointer text-[3em] text-gray-500 hover:text-cambridge_blue-400"
        onClick={goToHome}
      />
    </div>
  );
};

export default SuccessPage;
