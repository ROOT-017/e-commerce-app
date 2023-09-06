import React, { useCallback, useEffect, useState } from "react";
import { SendRequest } from "../components/Request/clientApi";
import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import ProductCardSkeletonLoader from "../components/skeletonLoader/ProductCardSkeletonLoader";
import { popResultsWithImages } from "../util/popResultsWithImages";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setCategories } from "../store/productSlice";

const ProductCategories = () => {
  // const [categories, setCategories] = useState([]);
  const [first, setFirst] = useState(0);
  const dispacth = useAppDispatch();
  const { categories } = useAppSelector((state) => state.products);

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setFirst(event.first);
    window.scrollTo(0, 0);
  };

  const fetchProduct = useCallback(async () => {
    const res = await SendRequest({
      method: "GET",
      url: `/products/categories/`,
      params: {
        limit: 10,
      },
    });
    if (res) {
      if (res.error) {
        console.log(res.error);
        return;
      }
      const results = popResultsWithImages(res);
      dispacth(setCategories(results));
    }
  }, [dispacth]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return (
    <div className=" lg:px-0 px-2 pt-4 lg:pt-8">
      <div className="flex w-full justify-evenly flex-wrap gap-2 lg:gap-4">
        {categories.length > 0 && (
          <>
            {categories.slice(first, first + 10).map((elt) => (
              <Link key={elt.label} to={`categories/${elt.label}`}>
                <Card key={elt.label} category={elt.label} image={elt.image} />
              </Link>
            ))}
          </>
        )}
        {categories.length === 0 && (
          <>
            <ProductCardSkeletonLoader />
            <ProductCardSkeletonLoader />
            <ProductCardSkeletonLoader />
            <ProductCardSkeletonLoader />
            <ProductCardSkeletonLoader />
            <ProductCardSkeletonLoader />
            <ProductCardSkeletonLoader />
            <ProductCardSkeletonLoader />
            <ProductCardSkeletonLoader />
            <ProductCardSkeletonLoader />
            <ProductCardSkeletonLoader />
            <ProductCardSkeletonLoader />
          </>
        )}
      </div>
      <div>
        {categories.length > 0 && (
          <Paginator
            first={first}
            rows={10}
            totalRecords={categories.length}
            onPageChange={onPageChange}
            template={{ layout: "PrevPageLink CurrentPageReport NextPageLink" }}
          />
        )}
      </div>
    </div>
  );
};

export default ProductCategories;
