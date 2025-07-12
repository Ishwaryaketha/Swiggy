export default function FoodItem({item}){
    return(
        <div className="flex-none">
            <a href={item?.action?.link}><img className="w-36 h-45" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+item?.imageId}></img></a>
        </div>
        
    )
}