import React, { useContext } from "react";
import RestaurantCard, { withOfferLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";
import UserContext from "../utils/UserContext";

const Body = () => {
  const {
    listOfRestaurants,
    filteredRestaurant,
    searchText,
    setSearchText,
    setFilteredRestaurant,
    RestaurantCardWithOffer,
  } = useRestaurantList();

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection.
      </h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  // Conditional Rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="filter flex justify-between items-center p-4 space-x-10">
        <div className="flex items-center space-x-8">
          <input
            type="text"
            className="border p-2 rounded-md "
            style={{ width: "330px" }}
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600"
          onClick={() => {
            const filteredList = filteredRestaurant.filter(
              (res) => res.info.avgRating > 3.9
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="flex">
          <h3 className="p-3 "> Username</h3>
          <input
            type="text"
            className="border p-2 rounded-md "
            style={{ width: "330px" }}
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="px-4">
        {/* Add horizontal padding here */}
        <div className="flex flex-wrap justify-center md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurants/" + restaurant.info.id}
              className="flex justify-center w-full"
            >
              <div className="w-full">
                <div className="transform hover:scale-105 transition duration-300">
                  {/* Using the withOfferLabel HOC */}
                  <RestaurantCardWithOffer resData={restaurant} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Body;
