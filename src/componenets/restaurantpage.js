import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import Menucard from "./menucard";

export default function RestaurantPage() {
    const { id } = useParams();
    const [restaurantdata, setdata] = useState([]);
    const [selected, setselected] = useState(null);

    useEffect(() => {
        async function retrieve() {
            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            const dataurl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${id}`;
            const response = await fetch(proxyurl + dataurl);
            const data = await response.json();
            const temp = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const filtereddata = temp?.filter((items) => 'title' in items?.card?.card);
            setdata(filtereddata);
        }
        retrieve();
    }, [id]);

    return (
        <div>
            <div className="w-[80%] mx-auto mt-10 mb-20">
                <Link to={`/city/delhi/${id}/search`}>
                    <p className="w-full text-center py-4 bg-gray-200 text-2xl hover:bg-gray-300 rounded-xl transition-all duration-200">
                         Search for Dishes
                    </p>
                </Link>
            </div>

        
            <div className="w-[80%] mx-auto mt-10 mb-10 flex gap-4">
                <button
                    className={`text-2xl px-8 py-2 border rounded-2xl transition-all duration-200 ${
                        selected === "veg" ? "bg-green-300" : "bg-gray-300"
                    }`}
                    onClick={() => setselected(selected === "veg" ? null : "veg")}
                >
                     Veg
                </button>
                <button
                    className={`text-2xl px-8 py-2 border rounded-2xl transition-all duration-200 ${
                        selected === "nonveg" ? "bg-red-300" : "bg-gray-300"
                    }`}
                    onClick={() => setselected(selected === "nonveg" ? null : "nonveg")}
                >
                     Non-Veg
                </button>
            </div>

           
            <div className="w-[80%] mx-auto">
                {restaurantdata?.map((item) => (
                    <Menucard
                        key={item?.card?.card?.title}
                        item={item?.card?.card}
                        selected={selected}
                    />
                ))}
            </div>
        </div>
    );
}
