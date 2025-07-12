import React from "react";
import reactDOM from "react-dom/client"; 
import Home from "./componenets/home";
import FoodDelivery from "./utils/fooddelivery";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestaurantPage from "./componenets/restaurantpage";
import Searchfood from "./componenets/searchfood";
import Cartheader from "./componenets/cartheader";
import { store } from "./Stored/stores";
import {Provider} from "react-redux";

export default function App(){
    return(
        <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route element={<Cartheader></Cartheader>}>
                <Route path="/fooddelivery" element={<FoodDelivery />} />
                <Route path="/city/delhi/:id" element={<RestaurantPage />} />
                <Route path="/city/delhi/:id/search" element={<Searchfood />} />
                </Route>
            </Routes>
        </BrowserRouter>
        </Provider>
    )
}
reactDOM.createRoot(document.getElementById("root")).render(<App></App>);