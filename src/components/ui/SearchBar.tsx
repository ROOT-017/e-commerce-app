import React, { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { toggleModal } from "../../store/modalSlice";

interface SearchBarPropsTypes {
  seachTerm: (text: string) => void;
}

const SearchBar = (props: SearchBarPropsTypes) => {
  const { isModal } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();
  const searchbar = document.getElementById("search-bar")?.focus();
  // if (searchbar) {
  //   searchbar.focus({ focusVisible: true });
  //   console.log("Elt");
  // }
  // useEffect(() => {
  //   const searchbar = document.getElementById("search-bar");
  //   console.log(searchbar);
  //   document.getElementById("search-bar")?.focus();
  //   console.log("=================");
  // setTimeout(() => {}, 200);
  // }, []);

  const openModal = () => {
    dispatch(toggleModal(true));
  };

  return (
    <div
      className="flex rounded-full  bg-[#e6efeb5c] overflow-hidden justify-center items-center px-2 cursor-pointer"
      onClick={openModal}
    >
      {!isModal && (
        <>
          <input
            type="text"
            placeholder="Search Products"
            readOnly
            className="hidden lg:flex border-none bg-transparent text-cambridge_blue  p-2 focus:outline-none focus:border-none"
          />{" "}
          <CiSearch className="text-cambridge_blue-400" />
        </>
      )}
      {isModal && (
        <>
          <input
            type="text"
            id="search-bar"
            placeholder="Search Products"
            className=" lg:flex lg:text-xl w-full border-none bg-transparent text-cambridge_blue  p-2 focus:outline-none focus:border-none "
            onChange={(e) => props.seachTerm(e.target.value.trim())}
          />{" "}
          <CiSearch className="lg:text-3xl text-2xl text-cambridge_blue-400" />
        </>
      )}
    </div>
  );
};

export default SearchBar;
