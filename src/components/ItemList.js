import { CDN_URL } from "../utils/constants";
 
 const ItemList = ({items}) => {
     console.log("items", items);
     return(
         <div>
             {items.map((item) => (
             <div key ={item.card.info.id} className="p-2 m-2 flex justify-between border-gray-300 border-b-2 text-left">
                <div className='w-9/12'> 
                  <div className='py-2'>
                     <span className="pr-2">{item?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? "🟢" : "🍗"}</span>
                     <span className="font-semibold">{item.card.info.name}-</span>
                     <span> ₹ {item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice / 100}</span>
                  </div>
                    <p className="text-xs">{item.card.info.description}</p>
                 </div> 
                 <div className='w-3/12'>
                   <div className="absolute">
                      <button className="bg-white mx-10  text-xs text-green-500 font-bold my-16 px-4 py-2 shadow-md rounded-lg"> Add +</button>
                   </div> 
                    <img className="w-36 h-24 px-2 rounded-xl" src={CDN_URL +  item.card.info.imageId}></img>    
                 </div>
             </div>
             ))}
         </div>
     )
 }

 export default ItemList;