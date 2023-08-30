import React from "react";
import { Skeleton } from "primereact/skeleton";

const ProductCardSkeletonLoader = () => {
  return (
    <div className=" overflow-hidden w-[10em] lg:w-[14em] h-fit font-poppins relative">
      <div className="w-full pb-2">
        <Skeleton
          // width="15rem"
          // borderRadius="1.5rem"
          className=""
          height="8rem"
        ></Skeleton>
      </div>
      <Skeleton
        // width="15rem"
        borderRadius="1.5rem"
        className="mb-2 rounded-tl-lg"
      ></Skeleton>
      <Skeleton className="mb-2"></Skeleton>
      <Skeleton width="6rem" className="mb-2"></Skeleton>
      <Skeleton width="5rem" borderRadius="1.5rem" height="3rem"></Skeleton>
    </div>
  );
};

export default ProductCardSkeletonLoader;
