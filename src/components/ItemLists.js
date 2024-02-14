import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemLists = ({ items, dummy }) => {
  //   console.log(items);
  console.log(dummy);

  // This dispatch is a function, that we get from a hook
  // that is known as useDispatch and this useDispatch hook
  // is again given to us by 'react-redux'
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch Action
    // Remember we made or exported some actions from our cart slice
    dispatch(addItem(item));
    // whatever I pass inside this addItem(""), will go inside my cart
    // adding pizza over there, that is my action.payload
    // Once Again, Whatever I will pass in here in this action
    // This will go to my reducer function action and that too inside
    // my payload.
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name} </span>
              <span>
                - ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12">
            <div className="absolute ">
              <button
                className="p-2 mx-12 rounded-lg bg-gray-200 text-green-800 shadow-lg text-sm"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img src={CDN_URL + item?.card?.info?.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemLists;
