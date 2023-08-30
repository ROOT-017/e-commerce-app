import React, { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { SendRequest } from "../components/Request/clientApi";

const ProductCategories = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  const fetchProduct = useCallback(async () => {
    const res = await SendRequest({
      method: "GET",
      url: `/products/category/${category}`,
    });
    if (res) {
      if (res.error) {
        console.log(res.error);
        return;
      }
      setProducts(res);
    }
  }, [category]);

  return <div className="">CAT</div>;
};

export default ProductCategories;
