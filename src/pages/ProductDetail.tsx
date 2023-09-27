import React, { useCallback, useEffect, useState } from "react";
import Pagnation from "../components/pagination/Pagination";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import AmountSelector from "../components/AmoutSelector";
import Buttn from "../components/ui/Buttn";
import ButtonEmpty from "../components/button/ButtonEmpty";

import { Rating } from "primereact/rating";
// import {
//   useStripe,
//   useElements,
//   PaymentElement,
// } from "@stripe/react-stripe-js";
import ProductDetailSection from "../components/ProductDetailSection";
import AvailableColors from "../components/AvailableColors";
import { BsTruck } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import { SendRequest, handleCheckout } from "../Request/clientApi";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Skeleton } from "primereact/skeleton";
import type { CartItemType } from "../components/ProductCard";
import {
  getProduct,
  setProduct,
  setProductFailure,
} from "../store/productSlice";
import { addProduct } from "../store/cartSlice";
import { toggleSpinderModel, toggleToast } from "../store/modalSlice";

const ProductDetail = () => {
  const dispatch = useAppDispatch();
  const { product } = useAppSelector((state) => state.products);
  const { email } = useAppSelector((state) => state.auth);
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const [thumbnail, setThumbnail] = useState("");
  const { id } = useParams();
  const location = useLocation();
  const [isValue, setValue] = useState(1);
  // const stripe = useStripe();
  // const elements = useElements();

  const [isColor, setColor] = useState({
    name: "",
    color: "#00ff00",
  });

  const handleIncrement = () => {
    setValue((preState) => (preState += 1));
  };
  const handleDecrement = () => {
    if (isValue === 1) return;
    setValue((preState) => (preState -= 1));
  };

  const handleThumbnail = (thumbnail: string) => {
    setThumbnail(thumbnail);
  };

  const handleColor = (color: string) => {
    // console.log(color);
    setColor((preState) => {
      return {
        ...preState,
        color: color,
      };
    });
  };

  const handleAddToCart = (item: CartItemType) => {
    dispatch(addProduct(item));
    setValue(1);
  };

  const fetchProduct = useCallback(async () => {
    try {
      dispatch(getProduct());
      const res = await SendRequest({
        method: "GET",
        url: `/product/${id}`,
      });

      if (res) {
        if (res.error) {
          console.log(res.error);
          dispatch(setProductFailure(res));
          return;
        }
        dispatch(setProduct(res));
      }
    } catch (error) {
      dispatch(setProductFailure(error));
      console.log(error);
    }
  }, [dispatch, id]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  const handleByNow = async () => {
    const origin = location.pathname;

    if (!isLoggedIn) {
      return navigate("/auth/signin", {
        replace: true,
        state: { from: origin },
      });
    }
    let pro = {
      id: id,
      title: product.title,
      price: product.price,
      description: product.description,
      quantity: isValue,
      image: product.thumbnail,
      email: email,
    };

    dispatch(toggleSpinderModel(true));
    const res = await handleCheckout({
      items: [pro],
      email: email,
    });
    dispatch(toggleSpinderModel(false));

    if (res.error) {
      dispatch(
        toggleToast({
          value: true,
          options: {
            severity: "error",
            summary: "Fail",
            detail: res.error,
            life: 3000,
          },
        })
      );
      return;
    }

    let url;
    if (!res.url) {
      url = origin;
    } else {
      url = res.url;
    }

    window.location.href = url;
  };

  return (
    <div className="pb-4">
      {product && (
        <Pagnation
          path={[product.category]}
          productName={product.title}
          category={product.category}
        />
      )}
      <div className="lg:flex lg:min-h-[85vh] p-2 lg:p-0">
        <div className="lg:w-1/2 h-[18em] lg:h-[85vh] lg:min-h-full font-poppins">
          {product && (
            <div className="flex justify-center items-center h-[80%] bg-background rounded-lg">
              <img
                src={thumbnail.length > 0 ? thumbnail : product.thumbnail}
                alt={id}
                className="lg:h-2/3  max-h-full"
              />
            </div>
          )}
          {!product && (
            <>
              <div className="hidden lg:block">
                <Skeleton height="65vh"></Skeleton>
              </div>{" "}
              <div className=" lg:hidden">
                <Skeleton height="8rem"></Skeleton>
              </div>
            </>
          )}
          <div className="pt-2 h-[20%] ">
            <ul className="flex h-full   justify-center gap-3">
              {product &&
                product.images.map((image: string) => (
                  <li
                    key={image}
                    className="bg-background rounded-lg lg:h-full p-4 h-[4em] lg:p-8 flex justify-center items-center w-1/4"
                    onClick={handleThumbnail.bind(null, image)}
                  >
                    <img
                      src={image}
                      alt={id + `-color`}
                      className="max-h-full w-full"
                    />
                  </li>
                ))}
              {!product && (
                <>
                  <Skeleton className="" height="8rem"></Skeleton>
                  <Skeleton className="" height="8rem"></Skeleton>
                  <Skeleton className="" height="8rem"></Skeleton>
                  <Skeleton className="" height="8rem"></Skeleton>
                </>
              )}
            </ul>
          </div>
        </div>
        <div className="lg:w-1/2  lg:px-12 font-poppins">
          {!product && (
            <ProductDetailSection>
              <div className="flex flex-col gap-2">
                <div>
                  <Skeleton className="mb-2" height="4rem"></Skeleton>
                  <Skeleton className="mb-2"></Skeleton>
                  <Skeleton width="50%" className="mb-2"></Skeleton>
                </div>
                <div>
                  <Skeleton className="mb-2" height="4rem"></Skeleton>
                  <Skeleton className="mb-2"></Skeleton>
                  <Skeleton width="50%" className="mb-2"></Skeleton>
                </div>
                <div>
                  <Skeleton className="mb-2" height="4rem"></Skeleton>
                  <Skeleton className="mb-2"></Skeleton>
                  <Skeleton width="50%" className="mb-2"></Skeleton>
                </div>
                <div>
                  <Skeleton className="mb-2" height="4rem"></Skeleton>
                  <Skeleton className="mb-2"></Skeleton>
                  <Skeleton width="50%" className="mb-2"></Skeleton>
                </div>
              </div>
            </ProductDetailSection>
          )}
          {product && (
            <>
              <ProductDetailSection>
                <p className="text-xl lg:text-3xl font-bold text-slate-500 pb-2">
                  {product.title}
                </p>
                <p className="text-xs">{product.description}</p>
                <div className="pt-2 flex">
                  <Rating value={product.rating} readOnly cancel={false} />
                  <span className="text-lg">(2365)</span>
                </div>
              </ProductDetailSection>
              <ProductDetailSection>
                <p className="lg:text-2xl text-lg font-bold text-slate-500">
                  ${product.price.toFixed(2)}{" "}
                  {product.price > 200 && "or 99.99/month"}
                </p>
                <p className="text-xs">
                  Suggested monthly payments with 6-month special financing.{" "}
                  <span className="underline text-cambridge_blue-300">
                    Learn
                  </span>
                </p>
              </ProductDetailSection>
              <ProductDetailSection>
                <p className="lg:text-2xl text-lg font-bold text-slate-500">
                  Choose a Color
                </p>
                <AvailableColors
                  colors={["#00ff00", "#00ff", "#00ffab"]}
                  isActive={false}
                  isColor={isColor.color}
                  handleColor={handleColor}
                />
              </ProductDetailSection>
              <ProductDetailSection>
                <div className="flex items-center gap-3 font-poppins">
                  <div>
                    <AmountSelector
                      handleAdd={handleIncrement}
                      handleSubstarct={handleDecrement}
                      value={isValue}
                    />
                  </div>
                  <p className="text-sm lg:text-base">
                    Only{" "}
                    <span className="text-burnt_sienna-400">
                      {product.stock} items
                    </span>{" "}
                    left. <br /> Don't miss it.
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4">
                  <Buttn text="Buy Now" handleClick={handleByNow} />
                  <ButtonEmpty
                    text="Add to Cart"
                    handleClick={handleAddToCart.bind(null, {
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      quantity: isValue,
                      image: product.thumbnail,
                    })}
                  />
                  {/* <Button text="Add to Cart" styles="bg-cambridge_blue w-[6em]" /> */}
                </div>
              </ProductDetailSection>
              <ProductDetailSection>
                <IconContext.Provider
                  value={{
                    color: "",
                    size: "1.5em",
                    className: "text-burnt_sienna-500",
                  }}
                >
                  <div>
                    <div className="flex gap-4 pb-2 items-center font-poppins">
                      <BsTruck />
                      <div>
                        <p className="lg:text-xl text-lg font-bold text-slate-500">
                          Free Delivery
                        </p>
                        <p>
                          Enter your Postal Code to check for delivery
                          availability
                        </p>
                      </div>
                    </div>{" "}
                    <div className="flex gap-4 items-center font-poppins">
                      <BsTruck />
                      <div>
                        <p className="lg:text-xl text-lg font-bold text-slate-500">
                          Return Delivery
                        </p>
                        Free 30 days Delivery Returns.{" "}
                        <span className="underline cursor-pointer text-cambridge_blue-400">
                          Detail
                        </span>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </IconContext.Provider>
              </ProductDetailSection>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
