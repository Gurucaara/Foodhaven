import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemLists from "./ItemLists";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="text-center m-4 p-4">
          <h1 className="text-2xl font-bold">Cart</h1>
          <div className="w-6/12 m-auto">
            <div className="flex justify-end">
              <button
                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
            </div>
            {cartItems.length === 0 && (
              <div className="text-center mt-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-16 w-16 text-orange-500 animate-bounce"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  Your Cart is Empty
                </h1>
                <p className="text-lg text-gray-600">
                  Looks like your cart is feeling a bit lonely. Why not add
                  something to it?
                </p>
              </div>
            )}
            <ItemLists items={cartItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
