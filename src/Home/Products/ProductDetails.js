import { Button, Container, Grid, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addToCart } from "../../Redux/ProductsSlice";
import QuantityAdder from "../../utility/QuantityAdder";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state?.allProducts.products);

  const singleProduct = product && product.find((item) => item._id == id);
  const { title, description, image, price, category, _id } = singleProduct;

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  return (
    <Container>
      {/* <h1>Products Details</h1> */}

      <Box sx={{ mt: 4 }}>
        <Grid container spacing={5}>
          {/* image  */}
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img width="100%" height="70%" src={image} alt="" />
          </Grid>

          {/* contents  */}
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "monospace",
                fontWeight: "800",
                color: "#002120",
              }}
            >
              {title}
            </Typography>
            <Typography variant="h6" sx={{ my: 1, color: "#969696" }}>
              Category:
              <span
                style={{
                  color: "#28161C",
                  fontWeight: "800",
                }}
              >
                {category}
              </span>
            </Typography>
            <Box
              sx={{ fontSize: "26px", display: "flex", alignItems: "center" }}
            >
              <h3
                style={{
                  color: "#969696",
                  marginRight: "15px",
                }}
              >
                ${price}
              </h3>
              <Rating
                sx={{ mx: 4 }}
                name="read-only"
                value={singleProduct.rating.rate}
                readOnly
              />
            </Box>
            <QuantityAdder pId={_id}></QuantityAdder>
            <Typography sx={{ textAlign: "justify" }} variant="h6">
              {description}
            </Typography>
            <Button
              onClick={handleAddToCart}
              sx={{ my: 3 }}
              variant="contained"
              color="error"
            >
              Add to Cart
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductDetails;
