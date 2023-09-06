import React from "react";
// import img from "../assets/images__1_-removebg-preview.png";
import { HiOutlineArrowsExpand } from "react-icons/hi";
import { Link } from "react-router-dom";

interface categoryProps {
  category: string;
  more?: boolean;
  image?: string;
}

const Category = (props: categoryProps) => {
  const { category, image } = props;
  return (
    <div className="flex flex-col items-center w-fit">
      {!props.more && (
        <>
          <div className="lg:h-[6em] h-10 lg:w-[6em] overflow-hidden w-10 p-2 rounded-full flex justify-center items-center bg-background">
            <img src={image} alt="category" />
          </div>
          <Link to={`products/categories/${category}`}>
            <p className="w-fit lg:text-base font-poppins text-xs text-gray-500 capitalize">
              {props.category || "category"}
            </p>
          </Link>
        </>
      )}
      {props.more && (
        <>
          <div className="lg:h-[6em] h-10 lg:w-[6em] w-10 p-2 rounded-full flex justify-center items-center bg-background">
            <HiOutlineArrowsExpand
              color="#d7502b"
              size="1.5em"
              className="lg:text-3xl"
            />{" "}
          </div>
          <Link to={`products`}>
            {" "}
            <p className="w-fit lg:text-base font-poppins hover:text-burnt_sienna-400 hover:underline transition-transform duration-150 ease-linear text-xs text-gray-500">
              {"More"}
            </p>
          </Link>
        </>
      )}
    </div>
  );
};

export default Category;
