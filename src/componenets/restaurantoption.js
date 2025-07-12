import { restaurants } from "../utils/restaurantdata"
import Restaurant from "./restaurant"
export default function RestaurantOptions(){
    return(
        <div className="flex flex-nowrap overflow-x-scroll max-w-[80%] ml-40 gap-10">
             {
                restaurants.map((data)=>
                <Restaurant key={data.info.id} data={data}></Restaurant>)
             }
        </div>
    )
}