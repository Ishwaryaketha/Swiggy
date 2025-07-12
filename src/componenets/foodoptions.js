import {imageGridCards} from "../utils/data"
import FoodItem from "./fooditem"
export default function FoodOptions(){
    return(
        <div className="w-[80%] ml-40 mb-40">
            <h1 className="text-3xl font-bold">Order our best food options</h1>
            <div className="flex flex-nowrap overflow-x-scroll  gap-10 ">
            {
                imageGridCards.map((option)=>
                    <FoodItem key={option.id} item={option}></FoodItem>
                )
            }
        </div>
        </div>
        
    )
}