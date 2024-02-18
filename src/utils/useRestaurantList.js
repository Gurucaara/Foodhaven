import React, { useState, useEffect } from "react";
import { RESTAURANT_API } from "./constants";
import RestaurantCard, { withOfferLabel } from "../components/RestaurantCard";

const useRestaurantList = () => {
  // State variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardWithOffer = withOfferLabel(RestaurantCard);

  // writing logic to fetch the data
  const fetchData = async () => {
    try {
      const data = await fetch(RESTAURANT_API);
      // convert the data to json
      const json = await data.json();
      setListOfRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
      setFilteredRestaurant(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
      // console.log(
      //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      //     ?.restaurants
      // );
      // console.log(
      //   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
      //     ?.restaurants
      // );
      // resData?.info?.aggregatedDiscountInfoV3;
      console.log(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
      setListOfRestaurants([]);
      setFilteredRestaurant([]);
    }
  };

  useEffect(() => {
    // fetch data inside our useEffect()
    fetchData();
  }, []);

  return {
    listOfRestaurants,
    filteredRestaurant,
    searchText,
    setSearchText,
    setFilteredRestaurant,
    RestaurantCardWithOffer,
  };
};

export default useRestaurantList;
