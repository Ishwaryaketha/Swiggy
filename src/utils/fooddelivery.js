import { useEffect, useState } from "react"
import FoodPage from "../componenets/foodpage";
import Shimmer from "../componenets/shimmer";
export default function FoodDelivery(){
    const [restaurantdata,setdata]=useState([]);
    useEffect(()=>{
        async function retrieve() {
            const proxyurl="https://cors-anywhere.herokuapp.com/";
            const dataurl="https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
            
            const response = await fetch(proxyurl+dataurl);
            const data= await response.json();
            setdata(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        retrieve();
    },[])
    if(restaurantdata?.length===0){
        return(<Shimmer></Shimmer>)
    }
   return(<>
   <h1 className="text-3xl ml-40 mt-10">Top Restaurants in delhi</h1>
   <div className="flex flex-wrap  ml-40 mr-40 mt-10">
    {
      restaurantdata?.map((item)=><FoodPage key={item.info.id} item={item}></FoodPage>)}
      </div></>
   )
}
//https://www.swiggy.com/city/delhi/pizza-hut-sector-3-rohini-rest16866
//https://www.swiggy.com/city/delhi/burger-king-sector-10-rohini-rest10208
//https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=862163&catalog_qa=undefined&submitAction=ENTER
//https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=391098&catalog_qa=undefined&submitAction=ENTER