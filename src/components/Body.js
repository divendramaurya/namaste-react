import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    // Local state variable in React, super powerful variable.
    const [listOfRestaurants,setListOfRestaurants ] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');

    //console.log('body rendered')

    useEffect(() => {
        console.log('useEffect Called');
        fetchData();
    }, []);

   fetchData = async() => {
       const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1982404&lng=72.9490094&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
       let json = await data.json();
       json = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
       console.log("json", json);
       setListOfRestaurants(json);
       setFilteredRestaurants(json);
   }

    return (listOfRestaurants.length === 0) ? (<Shimmer/>) : (
        <div className="body">
            <div className="filter">
                <div className='search'>
                    <input 
                    type='text' 
                    className="search-box"
                    value = {searchText}
                    onChange = {(e) => { setSearchText(e.target.value)}}
                    />
                    <button
                    onClick = {() => {
                        console.log(searchText);
                        const filteredRestaurant = listOfRestaurants.filter(
                            (res) => (res.info.name.toLowerCase().includes(searchText.toLowerCase())));    
                        console.log("filteredRestaurants :", filteredRestaurant);      
                        setFilteredRestaurants(filteredRestaurant);
                    }}
                    >Search</button>
                </div>
                <button className='filter-btn'
                onClick= {() => {
                    let filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.2);
                    console.log(filteredList);
                    setFilteredRestaurants(filteredList);
                }}>
                Top Rated Restaurants....
                </button>
            </div>
            <div className="res-container">
               { filteredRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
               ))}
            </div>
        </div>
    )
}

export default Body;