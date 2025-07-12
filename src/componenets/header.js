import { Link } from "react-router"
export default function Header()
{
    return(
        <header className=" bg-[#ff5200] text-white text-serif font-bold">
            <div className=" h-30 flex justify-between items-center mr-35 ml-35">
                <img  className="w-40 h-12" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"></img>
                <div className=" flex gap-15 items-center">
                    <a className="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                    <a className="_blank" href="https://www.swiggy.com/corporate/">Patner With Us</a>
                    <a className="_blank border-solid border-white-200" href="">Get The App</a>
                    <a className="_blank bg-black rounded-[16px] pt-3 pb-3 pl-4 pr-4 h-14 w-30 text-center" href="">Sign In</a>
                    
                </div>
            </div>
            <div className="flex flex-col items-center p-3 gap-2 relative">
                <img className="absolute left-0 top-15 h-112 w-63" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
                 <img className="absolute right-0 top-15 h-112 w-63" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>   
                <div className="max-w-[60%] text-5xl h-40 text-center font-bold overflow-hidden p-1">
                    Order Food And Groceries. Discover best restaurants.Swiggy it</div>
                <div className="max-w-[80%] container-auto flex gap-10">
                    <input className="bg-white w-[40%] text-black p-3 rounded" placeholder="Delhi, India"></input>
                    <input className="bg-white w-[55%] text-black p-3 rounded" placeholder="Search for restaurant,item or more"></input></div>
            </div>
            <div className="flex gap-10 max-w-[80%] justify-center ml-35 m-15">
               <Link to="/fooddelivery"> <img className="w-84 h-77" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img></Link>
                <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1"><img className="w-84 h-77" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"></img></a>
                <a href="https://www.swiggy.com/dineout"><img className="w-84 h-77" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"></img></a>
            </div>
        </header>
    )
}
