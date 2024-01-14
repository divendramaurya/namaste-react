import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
     console.log('resInfo', resInfo);
     if(resInfo === null) return<Shimmer/>
    return (
        <div>
            <h1>{resInfo?.cards[0]?.card?.card?.info.name}</h1>
            <p>{resInfo?.cards[0]?.card?.card?.info.cuisines.join(', ')} | {resInfo?.cards[0]?.card?.card?.info.costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map((item) => <li key={item.card.info.id} >{item.card.info.name} - is for Rs. {item.card.info.defaultPrice/100 | item.card.info.price/100}</li>)}
            </ul>
        </div>
    )
}
export default RestaurantMenu;
