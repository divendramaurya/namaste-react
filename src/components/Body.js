import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    // Local state variable in React, super powerful variable.
    const [listOfRestaurants,setListOfRestaurants ] = useState(resList);

    return (
        <div className="body">
            <div className="filter">
                <button className='filter-btn' 
                onClick= {() => {
                    let filteredList = listOfRestaurants.filter((res) => res.info.avgRating >= 4.5);
                    console.log(filteredList);
                    setListOfRestaurants(filteredList);
                }}>
                Top Rated Restaurants...
                </button>
            </div>
            <div className="res-container">
               { listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
               ))}
            </div>
        </div>
    )
}

export default Body;