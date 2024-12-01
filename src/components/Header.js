import React, { useState } from "react";
import logo from "../images/food.jpeg";
import cart from "../images/cart.webp" // Ensure the correct path to your image
import { Link } from "react-router-dom";

const Header = () => {
  let [btn, setBtn] = useState("Login");

  return (
    <div className="header">
      {/* Logo Section */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Navigation Items */}
      <div className="nav-items">
        <ul>
          <li><Link to="/" className="nav-heading">Home</Link></li>
          <li><Link to="/about" className="nav-heading">About us</Link></li>
          <li><Link to="/contact" className="nav-heading">Contact us</Link></li>
          <li>
            <button
              className="login-btn"
              onClick={() => {
                btn === "Login" ? setBtn("Logout") : setBtn("Login");
              }}
            >
              {btn}
            </button>
           
          </li>
          <li>{ btn==="Logout" &&   (<img src={cart} style={{width: "50px",height: "50px",borderRadius: "50%"}}/>)  }</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
