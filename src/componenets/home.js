import FoodOptions from "./foodoptions"
import Header from "./header"
import GroceryOptions from "./groceryoptions"
import RestaurantOptions from "./restaurantoption"
export default function Home(){
    return(
        <>
        <Header></Header>
        <FoodOptions></FoodOptions>
        <GroceryOptions></GroceryOptions>
        <RestaurantOptions></RestaurantOptions>
        </>
    )
}