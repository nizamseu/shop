import { Button, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../Redux/ProductsSlice";

const ProductsCart = ({ productItem }) => {
  const { title, description, image, price, category, _id } = productItem;
  const { count, rate } = productItem.rating;

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <Grid item xs={12} sm={9} md={6} lg={4}>
      <Paper
        sx={{
          margin: "10px",
          p: 2,
          a: { textDecoration: "none", color: "black" },
        }}
        elevation={10}
      >
        {/* products images  */}
        <Link to={`/detail/${_id}`}>
          <Box>
            <img width="100%" height="300px" src={image} alt="" />
          </Box>
          {/* products content  */}
          <Box sx={{ height: "150px", overflow: "hidden" }}>
            <h6>{category}</h6>
            <h4>{title.slice(0, 60)}</h4>
            <h3>Price: ${price}</h3>
            {/* <p>{description}</p> */}
          </Box>
        </Link>
        <Button
          sx={{ mt: 2 }}
          onClick={() => handleAddToCart(productItem)}
          variant="contained"
        >
          Add to Cart
        </Button>
      </Paper>
    </Grid>
  );
};

export default ProductsCart;
