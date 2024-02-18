import React, { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  // fetch data
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
    // fetching data only once
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    // coverting the data to json
    const json = await data.json();

    setResInfo(json?.data);
    // console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR);
  };

  return resInfo;
};

export default useRestaurantMenu;
