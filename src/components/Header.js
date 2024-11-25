import React from "react";
import logo from "../images/food.jpeg"
const Header = () =>(
    <div className="header">
        <div className="logo-container">
            <img src={logo} />
        </div>
        <div className="nav-items">
            <ul>Home</ul>
            <ul>About us</ul>
            <ul>contact us</ul>
        </div>
    </div>
);

export default Header;