import React, { useState } from "react";
import productImg from "./assets/images__1_-removebg-preview.png";
import Button from "./ui/Button";
import { Link } from "react-router-dom";
import { BsFillSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import ReactStars from "react-rating-star-with-type";

interface PropsTypes {
  product?: any;
}

const ProductCard = ({ product }: PropsTypes) => {
  const [isLiked, setLiked] = useState(false); // [false,()=>{}
  const handleLike = () => {
    setLiked((preState) => !preState);
  };

  return (
    <div className=" overflow-hidden w-[10em] lg:w-[14em] h-fit font-poppins relative">
      <div
        onClick={handleLike}
        className="absolute right-3 top-3 h-10 w-10 rounded-full bg-white flex justify-center items-center"
      >
        {isLiked ? <BsFillSuitHeartFill color="red" /> : <BsSuitHeart />}
      </div>
      <div className="bg-background  h-[15em] rounded-md flex justify-center items-center">
        <img
          src={product.thumbnail || productImg}
          alt="product"
          className="w-[70%]"
        />
      </div>
      <div className="">
        <Link to={`/products/${product.category}/${product.id}`}>
          <ul className="flex justify-between py-2 text-lg font-semibold text-gray-500">
            <li className="text-sm lg:text-lg truncate">{product.title}</li>
            <li className="text-sm lg:text-lg">
              <sup>$</sup>
              {product.price}
              <sup>99</sup>
            </li>
          </ul>
          <p className="text-xs lg:text-lg text-slate-500 truncate">
            {product.description}
          </p>
          <div className="pt-2 pb-4 flex items-center">
            <ReactStars
              value={product.rating}
              activeColors={["red", "orange", "#FFCE00", "#9177FF", "#8568FC"]}
            />
            <span className="lg:text-lg text-xs">(2365)</span>
          </div>
        </Link>
        <div>
          <Button text="Add to Cart" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
