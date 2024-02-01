import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: '#f0f0f0',
}

const RestaurantCard = (props) => {
    const {resData} = props;
    const { name, cuisines, cloudinaryImageId, costForTwo, avgRating, sla } = resData?.info;
    return (
        <div className="res-card m-4 p-4 w-[250px] rounded-xl hover:bg-black"  style={styleCard}>
            <img className="res-logo rounded-lg" alt = 'res-logo' src= {CDN_URL + cloudinaryImageId}/>
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
} 

// HOC : Input - RestaurantCard  => Output - RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute my-2 px-2 bg-black text-white rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;