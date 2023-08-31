import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import SearchBar from "../ui/SearchBar";
import { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal,toggleCartModal } from "../../store/modalSlice";
import Spinder from "../ui/Spinder";
interface ModalPropsTypes {}

const BackDrop = () => {
  //   const { isModal } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(toggleModal(false));
  };
  return (
    <div
      className="fixed min-h-screen h-screen z-10 top-0 left-0 w-full  bg-[#81b29a67]"
      onClick={closeModal}
    ></div>
  );
};

const ModalContent = (props: ModalPropsTypes) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { isModal } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch(toggleModal(!isModal));
  };

  const handleSearch = (text: string) => {
    if (text === "") return;
    console.log(text);
    setSearchTerm(text);
  };
  return (
    <div className="absolute top-0 left-0 z-20 flex flex-col items-center  w-full justify-center p-4 ">
      <div className="bg-white rounded-t-2xl lg:w-1/2 w-full">
        <SearchBar seachTerm={handleSearch} />
      </div>
      <ul className="h-[8em] bg-white lg:w-1/2 font-poppins px-1">
        <li className="py-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing
        </li>
      </ul>
      <div className="flex justify-center bg-white w-full lg:w-1/2 pb-2">
        <Spinder />
      </div>
    </div>
  );
};

const Modal = () => {
  const { isModal } = useSelector((state: RootState) => state.modal);

  const backdrop = document.getElementById("backdrop");
  const modal = document.getElementById("modal");
  return (
    <>
      {isModal && backdrop && ReactDom.createPortal(<BackDrop />, backdrop)}
      {isModal && modal && ReactDom.createPortal(<ModalContent />, modal)}
    </>
  );
};

export default Modal;
