import React from "react";
import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { BsGridFill } from "react-icons/bs";
import { LiaOpencart } from "react-icons/lia";
import { IconContext } from "react-icons/lib";

const Navbar = () => {
  return (
    <IconContext.Provider
      value={{ className: "", size: "1.5em", color: `#5d987b` }}
    >
      <div className="flex w-full px-2 lg:px-0 py-2 lg:py-4 items-center justify-between ">
        <h1>Logo</h1>
        <ul className="hidden lg:flex items-center justify-between gap-4">
          <li>Categories</li>
          <li>Deals</li>
          <li>What's New</li>
          <li>Delivery</li>
        </ul>
        <div className="flex justify-between gap-4">
          <div className="flex rounded-full bg-[#e6efeb5c] overflow-hidden justify-center items-center px-2">
            <input
              type="text"
              placeholder="Search Products"
              className="hidden lg:flex border-none bg-transparent text-cambridge_blue  p-2 focus:outline-none focus:border-none"
            />
            <CiSearch />
          </div>
          {/* <CiSearch  className="lg:hidden flex" /> */}

          <ul className="flex  items-center gap-4">
            <li className="hidden lg:flex gap-2 bg-cambridge_blue-800 lg:bg-none  hover:bg-cambridge_blue-800 rounded-full p-2 transition-colors duration-300 ease-in-out">
              <p className="flex gap-2 justify-center items-center">
                <FiUser />
                <span>Account</span>
              </p>
              <button>Sign In</button>
            </li>
            <li className="flex  gap-2 justify-center items-center hover:bg-cambridge_blue-800 rounded-full p-2 transition-colors duration-300 ease-in-out">
              <span className="text-lg font-semibold text-cambridge_blue-400">10</span>
              <LiaOpencart className="font-bold"/>
              <span>Cart</span>
            </li>
            <li className="lg:hidden">
              <BsGridFill />
            </li>
          </ul>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Navbar;

//npm package for react-icons
//npm install react-icons --save
