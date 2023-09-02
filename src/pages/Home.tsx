import React, { useCallback, useEffect, useState } from "react";
import Hero from "../components/Hero";
// import FilterSection from "../components/filters/FilterSection";
import Products from "./Products";
import Category from "../components/filters/Categories";
import { Skeleton } from "primereact/skeleton";
import { SendRequest } from "../components/Request/clientApi";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { auth } from "../auth/firebase";

import { RootState } from "../store/store";

import {
  getCategories,
  getProduct,
  setCategories,
  setProducts,
  setProductsFailure,
} from "../store/productSlice";
import ProductCardSkeletonLoader from "../components/skeletonLoader/ProductCardSkeletonLoader";
import ProductCategory from "../components/ProductCategory";
import exp from "constants";

export interface ProductsTypes {
  category: string;
  products: any[];
}

const initialProducts = {
  message: "",
  category: "",
  products: [],
};

let cat = [
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
  "automotive",
  "motorcycle",
  "lighting",
];
const randomIndex = Math.floor(Math.random() * cat.length);
const radCat = cat[randomIndex];

const Home = () => {
  //Redux state
  const { products, categories } = useAppSelector(
    (state: RootState) => state.products
  );
  const dispatch = useAppDispatch();

  const [searchHistory, setSearchHistory] = useState(initialProducts);

  const handleRandomProductCat = useCallback(
    (products: any[], category: string) => {
      // setRandomProductCat({
      //   category: category,
      //   products: products,
      // });
    },
    []
  );

  const fetchRandomProductCat = useCallback(async () => {
    // if (categories.length === 0) return;
    // const randomIndex = Math.floor(Math.random() * categories.length);
    // const radCat = categories[randomIndex];

    const res = await SendRequest({
      method: "GET",
      url: "/products/category/" + radCat,
      params: {
        limit: 0,
      },
    });
    if (res) {
      if (res.error) {
        console.log(res.error);
        return;
      }
    }
    if (res) {
      // setProducts(res);
      // handleProducts(res.products, category);
      handleRandomProductCat(res.products, radCat);
    }
  }, [handleRandomProductCat]);

  const fetchCategories = useCallback(async () => {
    dispatch(getCategories());
    const res = await SendRequest({
      method: "GET",
      url: "/products/categories",
    });
    if (res) {
      if (res.error) {
        console.log(res.error);
        dispatch(setProductsFailure(res.error));
        return;
      }
    }
    if (res) {
      dispatch(setCategories(res));
    }
  }, [dispatch]);

  const fetchProducts = useCallback(async () => {
    const category = "smartphones";
    dispatch(getProduct());
    const res = await SendRequest({
      method: "GET",
      url: "/products/category/" + category,
      params: {
        limit: 0,
      },
    });
    if (res) {
      if (res.error) {
        console.log(res.error);
        dispatch(setProductsFailure(res));
        return;
      }
    }
    if (res) {
      // console.log(res);
      dispatch(setProducts({ category: category, products: res.products }));
      /*  dispatch({
        type: "setProducts",
        payload: { category: category, products: res.products },
      }); */
      // handleProducts(res.products, category);
    }
  }, [dispatch]);

  const fetchHistory = useCallback(async () => {
    const historyCategory = JSON.parse(localStorage.getItem("categories")!);
    if (!historyCategory) return;

    const cat =
      JSON.parse(localStorage.getItem("categories")!)[0] === "smartphones"
        ? JSON.parse(localStorage.getItem("categories")!)[1]
        : JSON.parse(localStorage.getItem("categories")!)[0];

    const res = await SendRequest({
      method: "GET",
      url: "/products/category/" + cat,
    });
    if (res) {
      if (res.error) {
        console.log(res.error);
        return;
      }
    }
    if (res) {
      setSearchHistory({
        message: "You Might Like",
        category: `${cat}`,
        products: res.products,
      });
    }
  }, []);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
    fetchHistory();
  }, [fetchCategories, fetchProducts, fetchRandomProductCat, fetchHistory]);

  return (
    <div>
      <Hero />
      <div className="py-4  lg:py-12 px-2 flex gap-2 lg:gap-4 flex-wrap">
        {/* {categories.slice(0, 4).map((category) => (
          <Category category={category} key={category} />
        ))} */}
        <div className="flex  w-full lg:hidden gap-2 justify-evenly">
          {categories.slice(0, 4).map((category) => (
            <Category category={category} key={category} />
          ))}
          <Category category="more" more={true} />
        </div>
        <div className="hidden  w-full lg:flex  gap-6 justify-evenly">
          {categories.slice(0, 8).map((category) => (
            <Category category={category} key={category} />
          ))}
          <Category category="more" more={true} />
        </div>
        {/* {categories.length > 0 && <Category category="more" more={true} />} */}
        {categories.length === 0 && (
          <>
            <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
            <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
            <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
            <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
          </>
        )}
      </div>
      <div className="px-4 lg:px-0 pb-4">
        <div className="flex flex-wrap gap-2 lg:gap-6">
          {products.products.length === 0 && (
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
          {products.products.length > 0 && (
            <ProductCategory
              products={products.products}
              category={products.category}
            />
          )}
        </div>
      </div>{" "}
      <div className="px-4 lg:px-0 pb-4">
        <div className="flex flex-wrap gap-2 lg:gap-6">
          {products.products.length === 0 && (
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
          {searchHistory.products.length > 0 && (
            <ProductCategory
              products={searchHistory.products}
              category={searchHistory.category.split("-").join(" ")}
              message={searchHistory.message}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

// export const AppLoader = () => {
//   const userData = JSON.parse(localStorage.getItem("userData")!);
//   if (userData) {

//     return <Home />;
//   }
//   auth.onAuthStateChanged((user) => {});
// };
