import React, { useState } from "react";
import ItemLists from "./ItemLists";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  // console.log(data);
  const handleClick = () => {
    setShowIndex();
  };

  // THIS IS A CONTROLLED COMPONENT NOW BECAUSE YOU ARE CONTROLLING THE PARENT
  // When it had it's own state that time it does not have the control
  // It was controlling itself

  // Q. Can you modify the parent state variable from the child ?
  // A. Not possible directly but indirectly you can do that.
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4  bg-gray-50 shadow-lg p-4">
        {/* On click of this header it should hide and show */}
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg ">
            {data.title}({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* Accordion Body */}
        {showItems && <ItemLists items={data.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
