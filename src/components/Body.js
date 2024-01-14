import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import useOnlineStatus from '../utils/useOnlineStatus';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

    // Local state variable in React, super powerful variable.
    const [listOfRestaurants,setListOfRestaurants ] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');

    const onlineStatus = useOnlineStatus();
    console.log("onlineStatus", onlineStatus);
    //console.log('body rendered')

    useEffect(() => { 
        console.log('useEffect Called');
        fetchData();
    }, []);

   const fetchData = async() => {
       const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1982404&lng=72.9490094&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
       let json = await data.json();
       console.log("json before", json);
       json = json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
       console.log("json", json);
       setListOfRestaurants(json);
       setFilteredRestaurants(json);
   }

   if(onlineStatus === false){
       return(
        <h2>You are offline.</h2>
       )
   }

    return (listOfRestaurants?.length === 0) ? (<Shimmer/>) : (
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
                     <Link to={'/restaurants/'+ restaurant.info.id} key={restaurant.info.id}><RestaurantCard resData={restaurant}/></Link>
               ))}
            </div>
        </div>
    )
}

export default Body;