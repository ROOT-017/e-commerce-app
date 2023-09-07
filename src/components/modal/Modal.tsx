import React, { useCallback, useEffect, useState } from "react";
import ReactDom from "react-dom";
import SearchBar from "../ui/SearchBar";
import { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../../store/modalSlice";
import Spinder from "../ui/Spinder";
import { SendRequest } from "../../Request/clientApi";
import { HiChevronDoubleRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Dialog } from "primereact/dialog";

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
  const [searchResult, setSearchResult] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const { isModal } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch(toggleModal(!isModal));
  };

  const fetchSearch = useCallback(async () => {
    if (searchTerm.trim() === "") return;
    const res = await SendRequest({
      method: "GET",
      url: "/products/search",
      params: {
        q: searchTerm,
      },
    });
    let uniqueCategory = new Set();
    res.products.map((item: any) => uniqueCategory.add(item.category));
    if (uniqueCategory.size > 0) {
      localStorage.setItem(
        "categories",
        JSON.stringify([...Array.from(uniqueCategory).slice(0, 5)])
      );
    }

    setSearchResult(res.products);
  }, [searchTerm]);

  const handleSearch = (text: string) => {
    if (text.trim() === "") return;
    setSearchTerm(text);
  };

  useEffect(() => {
    if (searchTerm.trim() === "") return;
    // perform search only when user stops typing
    setIsTyping(true);
    const timer = setTimeout(() => {
      setIsTyping(false);
      fetchSearch();
    }, 700);
    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm, fetchSearch]);
  return (
    <Dialog
      visible={isModal}
      position={`top`}
      // style={{ width: "50vw" }}
      onHide={handleModal}
      draggable={false}
      resizable={false}
      closeIcon={false}
      dismissableMask={true}
      showHeader={false}
      className="w-full lg:w-1/2 bg-red-700"
      footer={
        <div className="flex flex-col justify-center w-full">
          <div className=" rounded-t-2xl   w-full">
            <SearchBar seachTerm={handleSearch} />
          </div>
          <div className="min:h-[6em]  bg-white w-full ">
            {searchResult.length === 0 && (
              <p className="py-4 px-2 text-center   text-gray-400">
                Search a product above
              </p>
            )}
            {searchResult.length > 0 && (
              <ul className="bg-white bg-red font-poppins max-h-[24em] w-full overflow-auto px-1 pb-2">
                {searchResult.map((item: any) => (
                  <Link
                    onClick={handleModal}
                    to={`/products/${item.category}/${item.id}`}
                    key={item.id}
                  >
                    {" "}
                    <li className="flex w-[80fullvw] lg:w-auto justify-between px-4 py-4 border-b border-cambridge_blue-700">
                      <span>
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="h-6"
                        />
                      </span>
                      <span className="truncate">{item.title}</span>
                      <HiChevronDoubleRight />
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </div>
          {isTyping && (
            <div className="flex justify-center items-center bg-white w-full  pb-2">
              <Spinder />
            </div>
          )}
        </div>
      }
    ></Dialog>
  );
  // <div className="absolute top-0 left-0 z-20 min-h-[6em] flex flex-col items-center  w-full justify-center p-4 ">

  /* {isTyping && (
        <div className="flex justify-center bg-white w-full lg:w-1/2 pb-2">
          <Spinder />
        </div>
      )}
      position */

  // </div>
  // );
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
