import {
  Button,
  Container,
  Grid,
  Paper,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../Redux/ProductsSlice";
import EmptyCart from "../../utility/EmptyCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const Cart = () => {
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
    const rest = cart.find((i) => i._id === item);
    console.log(rest);
  };
  const decrementQT = (item) => {
    const rest = cart.find((i) => i._id === item);
    console.log(rest);
  };

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
                  <Box>
                    <img width="150px" height="150px" src={item.image} alt="" />
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
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "20px",
                    }}
                  >
                    <IconButton
                      onClick={() => incrementQT(item._id)}
                      sx={{ mr: 3 }}
                    >
                      <AddIcon />
                    </IconButton>

                    <Typography sx={{ fontSize: "25px" }}>
                      {" "}
                      {item.price}
                    </Typography>
                    <IconButton
                      onClick={() => decrementQT(item._id)}
                      sx={{ ml: 3 }}
                    >
                      <RemoveIcon />
                    </IconButton>
                  </Box>
                  <h1>${item.price}</h1>
                </Box>
              </Grid>
            </Paper>
          ))}
        </Grid>
      ) : (
        <EmptyCart></EmptyCart>
      )}
    </Container>
  );
};

export default Cart;
