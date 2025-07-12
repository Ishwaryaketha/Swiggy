import { grocerycard } from "../utils/grocerydata";
import GroceryItem from "./groceryitem";
export default function GroceryOptions(){
    return(
        <div className="container mx-auto mt-10 w-[80%] mb-40">
        <h1 className="text-3xl font-bold">Shop groceries on Instamart</h1>
        <div className="flex gap-10 flex-nowrap overflow-x-scroll m-5">
        {
        grocerycard.map((item)=>
        <GroceryItem key={item.id} item={item}></GroceryItem>)
        }
        </div>
        </div>
        
    )
}