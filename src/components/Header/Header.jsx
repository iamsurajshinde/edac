import React from "react";
import "./Header.css";
import Logo from "../../assets/img/logo.jpg";
import { UPDATE_PROFILE } from "../../services/constants";

export default function Header(props) {
  const handleLogout = () => {};
  const handleProfile = () => {
    props.onSetScreen(UPDATE_PROFILE);
  };
  return (
    <div className="header">
      <div className="brand">
        <img src={Logo} />
      </div>
      {props.isLogin && (
        <div className="profile">
          <div>Welcome,</div>
          <button
            className="user"
            onClick={handleProfile}
            title="Update Profile"
          >
            {props.user}
          </button>
          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
