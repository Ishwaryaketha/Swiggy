import { useState,useEffect } from "react";
import { useParams } from "react-router"
export default function Searchfood(){
    const [food,setfood]=useState("");
    const {id}=useParams();
    const [restdata,setrestdata]=useState([])
    useEffect(()=>{
                async function retrieve() {
                    const proxyurl="https://cors-anywhere.herokuapp.com/";
                    const dataurl=`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}&catalog_qa=undefined&query=${food}&submitAction=ENTER`
                    const response = await fetch(proxyurl+dataurl);
                    const data= await response.json();
                    const temp=data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
                    const filtereddata=temp?.filter((items)=>'title' in items?.card?.card)
                    setrestdata(filtereddata);
                    console.log(filtereddata);
                }
                if(food.length>1){
                retrieve();
            }
                
            },[food])
    return(
        <div className="mx-auto m-20 ml-50">
            <input className="w-[80%] bg-gray-200 pl-10 text-3xl rounded-xl py-2" placeholder="search here" onChange={(e)=>setfood(e.target.value)}></input>
        </div>
    )
}