import React from "react";
import ProductsCategories from "./ProductCategory";
import ProductCardSkeletonLoader from "./skeletonLoader/ProductCardSkeletonLoader";
import { ProductsTypes } from "../pages/Home";

const Products = ({ products, category }: ProductsTypes) => {
  return (
    <div className="px-4 lg:px-0 pb-4">
      {/* <h1 className="lg:pb-4 pb-2 lg:text-3xl text-lg font-poppins font-[500]">
        Headphones For You <span className="text-cambridge_blue-200">!</span>
      </h1> */}
      <div className="flex flex-wrap gap-2 lg:gap-6">
        {products.length === 0 && (
          <>
            <ProductCardSkeletonLoader />
            <ProductCardSkeletonLoader />
            <ProductCardSkeletonLoader />
            <ProductCardSkeletonLoader />
            <ProductCardSkeletonLoader />
            <ProductCardSkeletonLoader />
            <ProductCardSkeletonLoader />
          </>
        )}
        {products.length > 0 && (
          <ProductsCategories products={products} category={category} />
        )}
      </div>
    </div>
  );
};

export default Products;
