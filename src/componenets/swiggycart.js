import { useSelector } from "react-redux";

export default function Swiggyheader() {
    const counter = useSelector((state) => state.cartslice.count);

    return (
        <header className="w-full bg-white shadow-md py-4">
            <div className="w-[90%] max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-6 rounded-xl bg-gray-100">
                {/* Logo / Brand */}
                <div className="text-2xl sm:text-3xl font-bold text-orange-500">
                    Swiggy 🍽️
                </div>

                {/* Cart */}
                <div className="relative text-xl sm:text-2xl font-semibold text-gray-800 flex items-center">
                    🛒 Cart
                    <span className="ml-2 bg-green-500 text-white text-sm sm:text-base font-bold px-2 py-1 rounded-full">
                        {counter}
                    </span>
                </div>
            </div>
        </header>
    );
}
