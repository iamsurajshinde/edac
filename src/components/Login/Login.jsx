import cryptoJs from "crypto-js";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { doLogin } from "../../services/loginService";
import Header from "../Header/Header";
import Loading from "../Loading/Loading";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const user = localStorage.getItem("edacuser");
  if (user) window.location.href = "/home";
  const handleChange = (e) => {
    if (e.target.name === "email") setEmail(e.target.value);
    else if (e.target.name === "password") setPassword(e.target.value);
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    let encryptPass = cryptoJs.AES.encrypt(password, "KEY").toString();
    console.log(email, " ", password, " ", encryptPass);
    setIsLoading(true);
    doLogin(email, encryptPass)
      .then((res) => {
        if (res.status === 401) {
          toast.error("Invalid Email & Password!");
        } else if (res.status === 200) {
          localStorage.setItem("user", res.data);
          window.location.href = "/home";
        }
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error("Invalid Email & Password! ", err);
        console.log("error => ", err);
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading && <Loading />}
      <Header />
      <div className="login-container">
        <div id="login-bg"></div>
        <form className="login-form" onSubmit={loginSubmit}>
          <div className="form-field">
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <button className="btn" type="submit">
              Log in
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
