import React, { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { BsGridFill } from "react-icons/bs";
import { LiaOpencart } from "react-icons/lia";
import { IconContext } from "react-icons/lib";
import Dropdown from "../filters/Dropdown";
import { Link } from "react-router-dom";
import SearchBar from "../ui/SearchBar";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { toggleCartModal } from "../../store/modalSlice";
import logo from "../../components/assets/logo.png";

const options = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

const Navbar = () => {
  const { totalQuantity: quantity } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const [seachTerm, setSearchTerm] = useState("");
  const [bounce, setBounce] = useState("");

  const handleSearch = (text: string) => {
    if (text === "") return;
    console.log(text);
    setSearchTerm(text);
  };

  useEffect(() => {
    setBounce("animate__bounceIn");
    setTimeout(() => {
      setBounce("");
    }, 1000);
  }, [quantity]);

  const handleClick = () => {
    dispatch(toggleCartModal(true));
  };

  return (
    <IconContext.Provider
      value={{ className: "", size: "1.5em", color: `#5d987b` }}
    >
      <div className="flex w-full  lg:px-0 py-2 lg:py-4 items-center justify-between ">
        <Link to={`/`}>
          {" "}
          <img src={logo} alt="logo" className="lg:w-[15em]" />
        </Link>
        <ul className="hidden lg:flex items-center justify-between gap-4">
          <li>
            {" "}
            <Dropdown options={options} />
          </li>
          <li>Deals</li>
          <li>What's New</li>
          <li>Delivery</li>
        </ul>
        <div className="flex justify-between gap-4">
          <SearchBar seachTerm={handleSearch} />
          {/* <CiSearch  className="lg:hidden flex" /> */}

          <ul className="flex  items-center gap-4">
            <li className="hidden lg:flex gap-2 bg-cambridge_blue-800 lg:bg-none  hover:bg-cambridge_blue-800 rounded-full p-2 transition-colors duration-300 ease-in-out">
              <p className="flex gap-2 justify-center items-center">
                <FiUser />
                <span>Account</span>
              </p>
              <button>Sign In</button>
            </li>
            <li
              className={`${bounce} flex gap-2 justify-center items-center hover:bg-cambridge_blue-800 rounded-full p-2 transition-colors duration-300 ease-in-out`}
              onClick={handleClick}
            >
              <span className="text-lg font-semibold text-cambridge_blue-400">
                {quantity}
              </span>
              <LiaOpencart className="font-bold" />
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
