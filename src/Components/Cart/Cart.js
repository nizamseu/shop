import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../Redux/ProductsSlice";
import EmptyCart from "../../utility/EmptyCart";
import { Link, useNavigate } from "react-router-dom";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState(
    useSelector((state) => state?.allProducts.cart)
  );
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    const remaining = cart.filter((i) => i._id !== item);
    dispatch(removeFromCart(remaining));
    setCart(remaining);
  };

  const incrementQT = (item) => {
    let rest = cart.find((i) => i._id === item);
    const data = JSON.parse(JSON.stringify(rest));
    const remaing = cart.filter((i) => i._id !== item);

    data.quantity += 1;

    const newData = [...remaing, data];

    dispatch(addToCart(newData));
    setCart(newData);

    console.log(data);
  };
  const decrementQT = (item) => {
    let rest = cart.find((i) => i._id === item);
    const data = JSON.parse(JSON.stringify(rest));
    const remaing = cart.filter((i) => i._id !== item);
    const newData = [...remaing, data];

    if (data.quantity > 1) {
      data.quantity -= 1;
      dispatch(addToCart(newData));
      setCart(newData);
    } else {
      data.quantity = 1;
      dispatch(addToCart(newData));
      setCart(newData);
    }
  };

  const total = cart.reduce((a, b) => a + b.price * b.quantity, 0);
  console.log("Total", total);
  return (
    <Container>
      {cart.length > 0 ? (
        <Grid spacing={3}>
          {cart.map((item) => (
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
                  <Grid item xs={12} md={4}>
                    <img width="150px" height="150px" src={item.image} alt="" />
                  </Grid>
                  <Grid sx={{ m: 3 }} item xs={12} md={8}>
                    <h5>{item.title}</h5>
                    <Button
                      onClick={() => {
                        handleRemoveFromCart(item._id);
                      }}
                    >
                      Remove
                    </Button>
                  </Grid>
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
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "20px",
                    }}
                  >
                    {/* <IconButton
                      onClick={() => incrementQT(item._id)}
                      sx={{ mr: 3 }}
                    >
                      <AddIcon />
                    </IconButton> */}

                    <Typography sx={{ fontSize: "25px" }}>
                      QYT: {item.quantity}
                    </Typography>

                    {/* <IconButton
                      onClick={() => decrementQT(item._id)}
                      sx={{ ml: 3 }}
                    >
                      <RemoveIcon />
                    </IconButton> */}
                  </Box>
                  <h1>${(item.price * item.quantity).toFixed(2)}</h1>
                </Box>
              </Grid>
            </Paper>
          ))}
        </Grid>
      ) : (
        <EmptyCart></EmptyCart>
      )}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          float: "right",
          marginRight: "20px",
        }}
      >
        <h1>Total Amount: ${total.toFixed(2)}</h1>
        <p style={{ marginTop: "-20px" }}>
          Taxes and shipping calculated at checkout
        </p>
        <Button sx={{ my: 3 }} variant="contained">
          <Link sx={{ textDecoration: "none", color: "white" }} to="/CheckOut">
            {" "}
            CheckOut
          </Link>
        </Button>
      </Box>
    </Container>
  );
};

export default Cart;
