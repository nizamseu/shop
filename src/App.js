import logo from "./logo.svg";
import "./App.css";
import Login from "./Authentication/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home/Home";
import Registration from "./Authentication/Registration";
import PrivateRoute from "./Authentication/PrivateRoute";
import Private from "./Components/Private/Private";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reg" element={<Registration />} />
          <Route
            path="/private"
            element={
              <PrivateRoute>
                <Private />
              </PrivateRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
