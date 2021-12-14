import { Button } from "@mui/material";
import React from "react";
import useFirebase from "../Hooks/useFirebase";

const Login = () => {
  const { user, loginWithGoogle, logOut } = useFirebase();
  return (
    <div>
      <h1>Login.js</h1>
      <h1>{user?.displayName}</h1>
      <Button onClick={() => loginWithGoogle()}>Google</Button>
      <Button onClick={() => logOut()}>LOgOUt</Button>
    </div>
  );
};

export default Login;
