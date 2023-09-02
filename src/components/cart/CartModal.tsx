import React from "react";
import ReactDOM from "react-dom";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { CgClose } from "react-icons/cg";
import { toggleCartModal } from "../../store/modalSlice";
import { PiMinusFill } from "react-icons/pi";
import { RiAddBoxFill } from "react-icons/ri";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import Buttn from "../ui/Buttn";
import { addProduct, removeProduct, clearCart } from "../../store/cartSlice";
import { CartItemType } from "../ProductCard";
import { FaOpencart } from "react-icons/fa";
import ButtonEmpty from "../button/ButtonEmpty";

const CartModalContnt = () => {
  const { products, totalPrice, totalQuantity } = useAppSelector(
    (state) => state.cart
  );
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toggleCartModal(false));
  };

  const handleAddToCart = (item: CartItemType) => {
    dispatch(addProduct(item));
  };
  const handleRemoveFromCart = (id: number) => {
    dispatch(removeProduct(id));
  };

  const clearCartHandler = () => {
    dispatch(clearCart());
  };
  return (
    <IconContext.Provider
      value={{ size: "1.5em", className: "cursor-pointer" }}
    >
      <div className="font-poppins relative text-gray-500 lg:w-1/3 w-[90%] rounded-lg">
        <div
          onClick={handleClick}
          className="absolute w-fit hover:bg-cambridge_blue-800 bg-background rounded-full p-1 right-1/2 -top-14 lg:-right-9 lg:-top-9 text-cambridge_blue-400"
        >
          <CgClose size={"2em"} />
        </div>
        <div className="w-full h-full bg-cambridge_blue-700  rounded-lg">
          <p className="text-center flex justify-center items-center lg:text-xl  py-4 border-gray-200">
            <span className="px-2">
              <FaOpencart color="#d7502b" size={`1.5em`} />
            </span>{" "}
            You have {totalQuantity} products in your card
          </p>
          <div className="w-full  lg:min-h-[24em] p-4 flex  flex-col ">
            <div className="min-h-[22em] lg:max-h-[48em] max-h-[25em] overflow-auto w-full rounded-lg  bg-[#e6edfa]">
              <ul className="p-2 h-full   ">
                {" "}
                {products.map((product) => (
                  <li
                    key={product.title}
                    className=" border-b-2 hover:bg-background text-xl py-2 border-gray-200  inline-flex w-full justify-between "
                  >
                    {product.title}{" "}
                    <span className="px-4">{`x${product.quantity}`}</span>{" "}
                    <span> ${product.price}</span>
                    <span className="flex ">
                      <PiMinusFill
                        onClick={handleRemoveFromCart.bind(null, product.id)}
                        color="#5d987b"
                      />
                      <RiAddBoxFill
                        onClick={handleAddToCart.bind(null, {
                          ...product,
                          quantity: 1,
                        })}
                        color="#5d987b"
                      />
                      <AiOutlineCloseCircle
                        onClick={handleRemoveFromCart.bind(null, product.id)}
                        color="#d7502b"
                      />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between items-center pt-4">
              <p className="text-2xl  font-bold text-gray-500">
                Total <span>${totalPrice}</span>
              </p>
              <div className="lg:flex gap-1 hidden">
                {" "}
                <ButtonEmpty text="Clear Cart" handleClick={clearCartHandler} />
                <Buttn
                  text="Checkout"
                  styles="bg-cambridge_blue-400 text-white w-full"
                />
              </div>
              <div className="lg:hidden gap-1 ">
                {" "}
                <ButtonEmpty text="Clear Cart" handleClick={clearCartHandler} />
                <Buttn
                  text="Checkout"
                  styles="bg-cambridge_blue-400 text-white w-full"
                />
              </div>
            </div>
            {/* <div className="h-2/3 w-full bg-red-500 mx-2  rounded-lg"></div>
            <div className="bg-red-500 w-full">
              <Buttn
                text="Checkout"
                styles="bg-cambridge_blue-400 text-white w-full"
              />
            </div> */}
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};
const CartModal = () => {
  const { isCartModal } = useAppSelector((state) => state.modal);
  const modal = document.getElementById("cart-root");
  return (
    <>
      {modal &&
        isCartModal &&
        ReactDOM.createPortal(
          <div className="fixed top-0 left-0 z-50 w-full h-screen bg-[#10101084]">
            <div className=" relative  rounded-md h-full w-full  flex justify-center items-center">
              <CartModalContnt />
            </div>
          </div>,
          modal
        )}
    </>
  );
};

export default CartModal;

/*{products.map((product) => (
                <li className=" border-b-2 hover:bg-background text-xl py-2 border-gray-200 inline-flex w-full justify-between ">
                  {product.title}{" "}
                  <span className="px-2">{`x${product.quantity}`}</span>{" "}
                  <span> ${product.price}</span>
                  <span className="flex ">
                    <PiMinusFill
                      onClick={handleRemoveFromCart.bind(null, product.id)}
                      color="#5d987b"
                    />
                    <RiAddBoxFill
                      onClick={handleAddToCart.bind(null, {
                        ...product,
                        quantity: 1,
                      })}
                      color="#5d987b"
                    />
                    <AiOutlineCloseCircle
                      onClick={handleRemoveFromCart.bind(null, product.id)}
                      color="#d7502b"
                    />
                  </span>
                </li>
              ))}

              */
