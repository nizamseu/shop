import React from "react";
import { useLocation } from "react-router";
import useFirebase from "../Hooks/useFirebase";
import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import { Link } from "react-router-dom";
const Login = () => {
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const { user, loginWithGoogle, login, logOut } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login(data);
    reset();
  };
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        // border: "1px solid gray",
        width: { xs: "100%", sm: "80%", md: "30rem" },
      }}
    >
      <h1>{user?.displayName}</h1>
      <Box
        sx={{
          //   border: "1px solid gray",
          padding: "20px",
          margin: "20px",
          width: "100%",
          backgroundColor: "#f6f6f6",
        }}
      >
        <Typography sx={{ textAlign: "center" }} variant="h6">
          Login Form
        </Typography>
        <Box>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            {/* <input
              {...register("name", { required: true })}
              placeholder="Enter Your Name"
            />
            {errors.name && (
              <span className="error">This field is required</span>
            )} */}

            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter Your Email"
            />
            {errors.email && (
              <span className="error">This field is required</span>
            )}

            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Enter Password"
            />
            {errors.password && (
              <span className="error">This field is required</span>
            )}

            <Button variant="contained" className="button" type="submit">
              Login
            </Button>
          </form>
        </Box>
      </Box>
      <Button
        sx={{ width: "100%", marginTop: "-10px" }}
        variant="contained"
        onClick={() => loginWithGoogle()}
      >
        Google
      </Button>
      <Link to={"/reg"}>Create an Account</Link>
    </Container>
  );
};

export default Login;
