import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from './RestaurantCategory'
import { useState } from "react";

const RestaurantMenu = () => {
    const { resId } = useParams();
    console.log("resId", resId)
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);
     console.log('resInfo', resInfo);
     const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
     console.log('categories : ', categories);
     if(resInfo === null) return<Shimmer/>
     const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;


    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg ">{cuisines.join(', ')} | {costForTwoMessage}</p>
            {/* Accordian  */}
            {categories.map((category, index) => 
            <RestaurantCategory 
               key = {category.card.card.title} 
               data ={category?.card?.card}
               showItems = {index === showIndex ? true : false}
               index = {showIndex}
               setShowIndex = {index === showIndex ? () => setShowIndex(-1) : () => setShowIndex(index)}
            />)}
        </div>
    )
}
export default RestaurantMenu;
