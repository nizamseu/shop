import { Button, Container, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../Redux/ProductsSlice";
import QuantityAdder from "../../utility/QuantityAdder";

const Cart = () => {
  const [cart, setCart] = useState(
    useSelector((state) => state?.allProducts.cart)
  );
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  console.log(cart);

  const handleRemoveFromCart = (item) => {
    const remaining = cart.filter((i) => i._id !== item);

    dispatch(removeFromCart(remaining));
    setCart(remaining);
  };
  return (
    <Container>
      <h1>Cart</h1>
      <Grid spacing={3}>
        {cart.length > 0 &&
          cart.map((item) => (
            <Paper
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                },
                alignItems: "center",
                margin: "10px",
                p: 2,
                a: { textDecoration: "none", color: "black" },
              }}
              elevation={10}
            >
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: {
                      xs: "column",
                      sm: "column",
                      md: "row",
                      lg: "row",
                    },
                  }}
                >
                  <Box>
                    <img width="250px" height="250px" src={item.image} alt="" />
                  </Box>
                  <Box sx={{ m: 3 }}>
                    <h5>{item.title}</h5>
                    <Button
                      onClick={() => {
                        handleRemoveFromCart(item._id);
                      }}
                    >
                      Remove
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    // flexDirection: {
                    //   xs: "column",
                    //   sm: "row",
                    //   md: "row",
                    //   lg: "row",
                    // },
                  }}
                >
                  <QuantityAdder></QuantityAdder>
                  <h1>{item.price}</h1>
                </Box>
              </Grid>
            </Paper>
          ))}
      </Grid>
    </Container>
  );
};

export default Cart;
