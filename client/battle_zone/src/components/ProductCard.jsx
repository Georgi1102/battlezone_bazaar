
export default function ProductCard  ({ title, description, price, image }){
  
    return(
        <div className="text-white ">
        <img className="w-[30vw] h-[30vh]" src={image}/>
        <div className="flex flex-row justify-between text-2xl">
          <div className="font-bold">{title}</div>
          <div>{price}</div>
        </div>
        <div className="text-xl">{description}</div>
      </div>
    )
}
   