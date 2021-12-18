import { Button, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";
import { decrementQT, incrementQT } from "../Redux/ProductsSlice";
const QuantityAdder = ({ pId }) => {
  const [qT, setQT] = useState(1);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state?.allProducts.cart);

  const incriseQT = () => {
    dispatch(incrementQT(pId));
    // setQT(qT + 1);
  };

  const decriseQT = () => {
    dispatch(decrementQT(pId));
    // qT > 1 ? setQT(qT - 1) : setQT(1);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        fontSize: "20px",
      }}
    >
      <IconButton onClick={incriseQT} sx={{ mr: 3 }}>
        <AddIcon />
      </IconButton>

      <Typography sx={{ fontSize: "25px" }}> {qT}</Typography>
      <IconButton onClick={decriseQT} sx={{ ml: 3 }}>
        <RemoveIcon />
      </IconButton>
    </Box>
  );
};

export default QuantityAdder;
