import { useState } from "react"
import { addItems,IncrementItems,DecrementItems } from "../Stored/CartSlicer";
import { useDispatch } from "react-redux";

export default function CardInfo({restdata}){
    const [count,setcount]=useState(0);
    const dispatch=useDispatch();

    function handleAdditems(){
        setcount(1);
        dispatch(addItems(restdata))
    }
    function handleIncrementitems(){
        setcount(count+1);
        dispatch(IncrementItems(restdata))
    }
    function handleDecrementitems(){
        if (count > 1) {
  setcount(count - 1);
  dispatch(DecrementItems(restdata));
} else {
  setcount(0);
  dispatch(DecrementItems(restdata)); 
}

    }
    return(
        <>
        <div className="flex w-full justify-between m-4 ">
            <div className="flex flex-col w-[70%]" >
                <p className="text-xl text-gray-700 font-semibold m">{restdata?.name}</p>
                <p>₹{restdata?.defaultPrice/100}</p>
                <p>
                    <span className="text-green-700">{restdata?.ratings?.aggregatedRating?.rating}</span>
                    <span>{"("+restdata?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
                </p>
                <p>{restdata?.description}</p>

            </div>
            <div className="w-[20%] relative h-36">
                <img className="w-full object-cover h-36" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restdata?.imageId}></img>
                {count===0 ?( <button className="absolute bottom-1 left-20 rounded-xl text-2xl text-green-600 text-bold px-4 py-1 bg-white shadow-md border border-white" onClick={()=>handleAdditems()}>Add</button>):(
                
                    <div className="flex justify-between absolute bottom-1 left-20 rounded-xl text-2xl text-green-600 text-bold px-4 py-1 bg-white shadow-md border border-white">
                        <button className="mr-2" onClick={()=>handleIncrementitems()}>+</button><span>{count}</span><button className="ml-2" onClick={()=>handleDecrementitems()}>-</button>
                        </div>)}
              
                <button className="absolute bottom-1 left-20 rounded-xl text-2xl text-green-600 text-bold px-4 py-1 bg-white shadow-md border border-white"></button>
            </div>
        </div>
        <hr></hr>
        </>
    )
}