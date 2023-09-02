import React from "react";
import { Outlet } from "react-router-dom";
import img from "../components/assets/images__1_-removebg-preview.png";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { IconContext } from "react-icons/lib";

const AuthLayout = () => {
  const handleSigninWithGoogle = () => {};
  return (
    <IconContext.Provider value={{ size: "2em" }}>
      {" "}
      <div className="h-screen flex w-full  justify-center items-center  font-poppins text-gray-500">
        <div className=" rounded-xl overflow-hidden">
          <div className="overflow-hidden flex justify-center lg:justify-normal">
            <div className="hidden lg:flex justify-center items-center bg-burnt_sienna-800 w-1/2">
              <img src={img} alt="headset" />
            </div>
            <div className="w-[80%] rounded-xl lg:w-1/2  bg-[#f5f6fecc]">
              <Outlet />
              <div className="p-2">
                <div className="text-center text-sm flex items-center justify-center">
                  <span className="w-full border-b bg-slate-300 h-1 mr-4"></span>
                  or
                  <span className="w-full border-b bg-slate-300 h-1 ml-4"></span>
                </div>
                <ul className="flex justify-center gap-4 py-4">
                  <li onClick={handleSigninWithGoogle}>
                    <FcGoogle />
                  </li>
                  <li>
                    <BsFacebook color="#0000ff" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default AuthLayout;

// how to configure authentiction with react router dom
// https://reactrouter.com/web/example/auth-workflow

