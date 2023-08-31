import React from "react";
import img from "../components/assets/images__1_-removebg-preview.png";
import ReactStars from "react-rating-star-with-type";
interface CardPropsTypes {
  category: string;
}

const Card = ({ category }: CardPropsTypes) => {
  return (
    <div className="rounded-xl bg-background text-gray-500 hover:shadow-md transition-all ease-in-out duration-300 hover:shadow-burnt_sienna">
      <div className="w-[10em] lg:w-[14em] h-fit">
        <div className="p-4">
          <img src={img} alt="category" />
        </div>
        <p className="text-center text-lg font-poppins capitalize">
          {category.split("-").join(" ")}
        </p>
        <div className="pb-4 items-center flex flex-col">
          <p className="text-center pb-2">
            <span className="text-burnt_sienna-400">5</span> products
          </p>
          <ReactStars
            value={3.5}
            activeColors={["red", "orange", "#FFCE00", "#9177FF", "#8568FC"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
