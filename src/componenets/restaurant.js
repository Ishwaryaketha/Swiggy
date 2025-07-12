export default function Restaurant({data}){
    return(
        <div className="max-w-sm rounded-10 flex-none">
                <div className="relative h-48">
                    <img className="w-82 h-48 rounded object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+data?.info?.mediaFiles[0]?.url}></img>
                    <p className="absolute bottom-3 left-1 text-white font-bold">{data?.info?.name}</p>
                    <p className="absolute bottom-3 right-1 text-white font-bold">{data?.info?.rating?.value}</p>
                    <div className="absolute bg-gradient-to-t from-black h-8 bottom-0 left-0 right-0"></div>
                    </div>
                <div>
                    <div className="relative h-6 text-xs">
                        <p className="absolute bottom-2 left-2 ">{data?.info?.cuisines[0]}</p>
                        <p className="absolute bottom-2 right-2 ">{data?.info?.costForTwo}</p>
                    </div>
                    <div className="relative h-6 text-xs">
                        <p className="absolute bottom-2 left-2 ">{data?.info?.locationInfo?.formattedAddress}</p>
                        <p className="absolute bottom-2 right-2 ">{data?.info?.locationInfo?.distanceString}</p>
                    </div>
                    
                    
                </div>
        </div>  
    )
}