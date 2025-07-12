import { useState } from "react"
import CardInfo from "./cardinfo"
export default function Menucard({item,selected}){
    const [isopen,setisopen]=useState(true);
    
    if(item && 'categories' in item){
        return(
            <div className="w-full">
                
                  <p>{item?.title}</p>  
                  <div>{item?.categories?.map((items)=><Menucard  key={items?.title} item={items} selected={selected}></Menucard>)}</div>
                
            </div>
        )
    }
    if(!isopen){
        return(
            <div className="w-full">
                <div className="flex justify-between w-full">
                    <p className="text-2xl font-bold mb-4">{item?.title}</p>
                    <button className="text-2xl font-bold mr-20" onClick={()=>setisopen(!isopen)}>{isopen?"˄":"˅"}</button>
                </div>
            </div> 
        )
    }
    if(selected==="veg"){
        return(
            <div className="w-full">
            <div className="flex justify-between w-full">
                    <p className="text-2xl font-bold mb-4">{item?.title}</p>
                    <button className="text-2xl font-bold mr-20" onClick={()=>setisopen(!isopen)}>{isopen?"˄":"˅"}</button>
            </div>
            <div>{item?.itemCards?.filter((food)=>"isVeg" in food?.card?.info).map((items)=><CardInfo key={items?.card?.info?.id } restdata={items?.card?.info}></CardInfo>)}</div>
            </div>
        )
    }
    if(selected==="nonveg"){
        return(
            <div className="w-full">
            <div className="flex justify-between w-full">
                    <p className="text-2xl font-bold mb-4">{item?.title}</p>
                    <button className="text-2xl font-bold mr-20" onClick={()=>setisopen(!isopen)}>{isopen?"˄":"˅"}</button>
            </div>
            <div>{item?.itemCards?.filter((food)=>!("isVeg" in food?.card?.info)).map((items)=><CardInfo key={items?.card?.info?.id } restdata={items?.card?.info}></CardInfo>)}</div>
            </div>
        )
    }
    return(
        
        <div className="w-full">
            <div className="flex justify-between w-full">
                    <p className="text-2xl font-bold mb-4">{item?.title}</p>
                    <button className="text-2xl font-bold mr-20" onClick={()=>setisopen(!isopen)}>{isopen?"˄":"˅"}</button>
            </div>
            <div>{item?.itemCards?.map((items)=><CardInfo key={items?.card?.info?.id } restdata={items?.card?.info}></CardInfo>)}</div>
        </div>
    )
}