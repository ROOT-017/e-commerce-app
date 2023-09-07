import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SendRequest } from "../Request/clientApi";
import ProductCard from "../components/ProductCard";
import ProductCardSkeletonLoader from "../components/skeletonLoader/ProductCardSkeletonLoader";

const CategoriesDetails = (props: any) => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  const fetchProduct = useCallback(async () => {
    const res = await SendRequest({
      method: "GET",
      url: `/products/category/${category}`,
      params: {
        limit: 10,
      },
    });
    if (res) {
      if (res.error) {
        console.log(res.error);
        return;
      }
      setProducts(res.products);
    }
  }, [category]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return (
    <div className=" pb-16">
      <p className="w-fit lg:text-xl lg:py-6 pb-4 font-poppins text-lg text-gray-500 capitalize">
        {category?.split("-").join(" ") || "category"}
      </p>
      <div className="flex w-full flex-wrap gap-4">
        {products.length > 0 &&
          products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        {products.length === 0 && (
          <>
            <ProductCardSkeletonLoader />
            <ProductCardSkeletonLoader />
            <ProductCardSkeletonLoader />
            <ProductCardSkeletonLoader />
            <ProductCardSkeletonLoader />
          </>
        )}
      </div>
    </div>
  );
};

export default CategoriesDetails;
