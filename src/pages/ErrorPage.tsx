import React from "react";
import Navbar from "../components/navigation/Navbar";

const ErrorPage = () => {
  const gotoHome = () => {
    window.location.href = "/";
  };
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-[85vh] font-poppins">
        <h1 className="text-5xl font-bold pb-4 text-gray-500">
          404 - Not Found
        </h1>
        <button
          onClick={gotoHome}
          className="text-xl text-white py-4 px-6 bg-cambridge_blue-400 rounded-lg"
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
