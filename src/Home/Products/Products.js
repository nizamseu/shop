import { Container, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProducts, setProducts } from "../../Redux/ProductsSlice";
import ProductsCart from "./ProductsCart";

const Products = () => {
  const products = useSelector((state) => state?.allProducts.products);
  const dispatch = useDispatch();
  console.log("products", products);
  useEffect(() => {
    axios.get("http://localhost:5000/products").then((result) => {
      dispatch(setProducts(result.data));
    });
  }, []);
  return (
    <Grid>
      <h1>Products</h1>
      <Container>
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {products &&
            products.map((productItem) => (
              <ProductsCart productItem={productItem}></ProductsCart>
            ))}
        </Grid>
      </Container>
    </Grid>
  );
};

export default Products;
