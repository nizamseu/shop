import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProducts, setProducts } from "../../Redux/ProductsSlice";

const Products = () => {
  const products = useSelector((state) => state?.allProducts.products);
  const dispatch = useDispatch();
  console.log("ami", products);

  useEffect(() => {
    axios.get("https://api.npms.io/v2/search?q=react").then((result) => {
      dispatch(setProducts(result.data.results));
    });
  }, []);
  return (
    <div>
      <h1>Products</h1>
    </div>
  );
};

export default Products;
