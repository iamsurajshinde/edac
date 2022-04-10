import React from "react";
import logo from "./logo.svg";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import { ToastContainer } from "react-toastify";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div style={{ position: "fixed", zIndex:999 }}>
        <ToastContainer
          position="top-right"
          theme="colored"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
      <Routes>
        <Route exact={true} path="/login" element={<Login />} />
        <Route exact={true} path="/home" element={<Home />} />
        <Route exact={true} path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
