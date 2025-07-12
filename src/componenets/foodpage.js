
import { Link } from "react-router";
export default function FoodPage({ item}) {
  return (
    <Link to={"/city/delhi/"+item?.info?.id}>
    <div className="flex flex-none flex-col m-2 transform transition duration-200 hover:scale-95 w-70">
      <img className="w-70 h-45 object-cover rounded-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+item?.info.cloudinaryImageId} ></img>
      <h2 className="font-bold">{item?.info?.name}</h2>
      <div className="flex justify-between"><p>{"\u272A"+" "+item.info.avgRating}</p><p> { item.info.sla.slaString}</p></div>
      <p>{item.info.cuisines.join(" ")}</p>
      <p className="">{item.info.areaName}</p>
      
    </div>
    </Link>
  );
}
