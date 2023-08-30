import React from "react";
import { Skeleton } from "primereact/skeleton";

const ProductDetailSkeleton = () => {
  return (
    <div className="lg:flex lg:min-h-[85vh] p-2 lg:p-0">
      <div className="lg:w-1/2 h-[18em] lg:h-auto lg:min-h-full font-poppins">
        <Skeleton className="" height="8rem"></Skeleton>
      </div>
      <div className="lg:w-1/2 h-[18em] lg:h-auto lg:min-h-full font-poppins">
        <Skeleton className="" height="8rem"></Skeleton>
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;
