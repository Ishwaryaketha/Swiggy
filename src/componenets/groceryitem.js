export default function GroceryItem({item}){
    return(
        <div className="w-37  flex-none">
            <a href={item?.action?.link}><img className="h-45 w-70" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+item?.imageId}></img></a>
            <h2>{item?.action?.text}</h2>
        </div>
    )
}