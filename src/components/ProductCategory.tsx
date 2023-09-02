import React from "react";
import ProductCard from "./ProductCard";

interface PropsTypes {
  products: any[];
  category?: string;
  message?: string;
}

const ProductCategory = ({ products, category, message }: PropsTypes) => {
  return (
    <div className="w-full py-8  font-poppins">
      <h1 className="lg:pb-4 pb-2 lg:text-3xl text-lg font-poppins font-[500] capitalize">
        {/* {category + " For You" || " Headphones For You"} */}
        {!message && (
          <span>
            <span className="text-burnt_sienna-500">{category}</span> For You!
          </span>
        )}
        {message && (
          <>
            <span className="lg:pb-4 pb-2 lg:text-3xl text-lg font-poppins font-[500] capitalize">
              {message + " "}
            </span>
            <span className="text-burnt_sienna-500 capitalize">{category}</span>
          </>
        )}
        {/* <span className="text-cambridge_blue-200">!</span> */}
      </h1>
      <div className="flex w-full flex-wrap gap-2 justify-evenly lg:gap-6">
        {products.map((product) => (
          <ProductCard product={product} key={product.title} />
        ))}
        {products.slice(1, 4).map((product) => (
          <ProductCard product={product} key={product.title} />
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
