import React, { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props, index) => {
  const { resData } = props;
  // console.log(props?.resData?.info);

  const { loggedInUser } = useContext(UserContext);

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.info;
  return (
    <div className="bg-white shadow-md hover:shadow-xl hover:bg-orange-100 hover:cursor-pointer transition duration-300 rounded-md overflow-hidden h-full">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="Restaurant"
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">{name}</h2>
        <p className="text-gray-600 mb-2 whitespace-nowrap overflow-hidden overflow-ellipsis">
          {cuisines.join(", ")}
        </p>
        <div className="flex items-center space-x-2 text-yellow-500 font-semibold">
          <span>{avgRating} ⭐️</span>
          <span>{costForTwo}</span>
        </div>
        <p className="text-gray-500">{deliveryTime} minutes</p>
        <p className="text-gray-500">User : {loggedInUser}</p>
      </div>
    </div>
  );
};

// Higher Order Components

// input - Restaurant Card ==> RestaurantCardOffer

export const withOfferLabel = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;
    const discountInfo = resData?.info?.aggregatedDiscountInfoV3;

    // Check if discountInfo is available and contains both header and subHeader
    const hasDiscountInfo =
      discountInfo &&
      discountInfo.header !== undefined &&
      discountInfo.subHeader !== undefined;

    return (
      <div>
        {hasDiscountInfo && (
          <label className="absolute bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white m-2 p-2 rounded-lg shadow-lg hover:scale-105 transition duration-300 ">
            {discountInfo.header + " " + discountInfo.subHeader}
          </label>
        )}
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
