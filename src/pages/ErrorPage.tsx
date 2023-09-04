import React from "react";
// import Navbar from "../components/navigation/Navbar";

const ErrorPage = () => {
  const gotoHome = () => {
    window.location.href = "/";
  };
  return (
    <div>
      {/* <Navbar /> */}
      <div className="flex flex-col justify-center items-center h-[85vh] font-poppins">
        <h1 className="lg:text-5xl text-2xl font-bold pb-4 text-gray-500 text-center">
          404 - Not Found
        </h1>
        <button
          onClick={gotoHome}
          className="text-xl text-white lg:py-4 py-2 px-6 bg-cambridge_blue-400 rounded-lg"
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
