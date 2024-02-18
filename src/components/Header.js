import React, { useContext, useEffect, useState } from "react";
import FoodHavenIcon from "../assests/FoodHaven.png";
import CartIcon from "../assests/Cart.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  useEffect(() => {}, [btnNameReact]);

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  // Subscribing to the store using the Selector
  const cartItems = useSelector((store) => store.cart.items);
  // This useSelector gives access to our store, but we will
  // now tell what portion of your store we need access to
  // console.log(cartItems);

  return (
    <header className="bg-white shadow-md p-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            {" "}
            <img
              src={FoodHavenIcon}
              alt="food-icon"
              className="h-23 w-32"
            />{" "}
          </Link>
        </div>
        <div className="hidden sm:flex items-center space-x-12">
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="text-gray-700 hover:text-orange-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-700 hover:text-orange-600">
                About
              </Link>
            </li>
            {/* <li>
              <Link
                to="/grocery"
                className="text-gray-700 hover:text-orange-600"
              >
                Grocery
              </Link>
            </li> */}
            <li className="text-gray-700 hover:text-orange-600 font-bold">
              {loggedInUser}
            </li>
            <Link
              to="/cart"
              className="text-gray-700 hover:text-orange-600 font-bold"
            >
              <li>Cart - ({cartItems.length} items)</li>
            </Link>
          </ul>
          <div className="flex items-center space-x-5">
            {/* <img
              src={CartIcon}
              alt="cart-icon"
              className="h-7 w-7"
              aria-hidden="true"
            /> */}
            {/* <span className="px-4 font-bold text-xl">Cart</span> */}
            <button
              className="flex items-center p-1 rounded-full text-gray-700 hover:text-orange-600 focus:outline-none"
              onClick={() => {
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
              }}
            ></button>
            <button
              className="px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition duration-300 focus:outline-none"
              onClick={() => {
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
