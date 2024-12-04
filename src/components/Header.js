import React, { useState } from "react";
import logo from "../images/food.jpeg";
import cart from "../images/cart.webp";
import { Link } from "react-router-dom";

const Header = () => {
  let [btn, setBtn] = useState("Login");

  return (
    <div className="w-full h-16 bg-white shadow-md px-6 flex justify-between items-center">
      {/* Logo Section */}
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <img src={logo} alt="Logo" />
      </div>

      {/* Navigation Items */}
      <div className="nav-items">
        <ul className="list-none flex gap-8 m-0 p-0 text-center">
          <li>
            <Link to="/" className="text-gray-700 hover:text-yellow-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-700 hover:text-yellow-500">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-700 hover:text-yellow-500">
              Contact Us
            </Link>
          </li>
          <li>
            <button
              className="text-sm bg-white hover:text-yellow-500 cursor-pointer"
              onClick={() => {
                btn === "Login" ? setBtn("Logout") : setBtn("Login");
              }}
            >
              {btn}
            </button>
          </li>
          <li>
            {btn === "Logout" && (
              <img
                src={cart}
                alt="Cart"
                className="w-12 h-12 rounded-full"
              />
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
