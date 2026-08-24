import { ShoppingCart,Heart } from "lucide-react";

const ProductCard = ({item}) => {
  return (
    <div className="w-full max-w-sm rounded-xl shadow-2xl flex flex-col">
        <div className="relative w-full aspect-square object-contain  bg-light">
          <button className="absolute z-10 top-14 right-5 rounded-full bg-white shadow-md p-2 sm:top-5"><Heart className="sm:w-7 lg:w-5 h-5" strokeWidth={2}/></button>
          <span className="bg-hover absolute z-10 top-16 left-10 text-white font-bold rounded-md px-2 sm:top-7">-{item.discountPercentage}%</span>
          <img src={item.thumbnail} alt="Thumbnail" className="w-full h-full object-contain" />
        </div>
        
        <div className="flex flex-col gap-3 p-3 flex-1">
            <span className="text-hover font-extrabold px-3 uppercase">{item.category}</span>
            <h1 className="font-bold uppercase truncate">{item.title}</h1>
            <p><span className="font-medium">⭐ {item.rating.toFixed(1)}</span> <span>({item.reviews?.length || 0})</span></p>
            <p className="flex justify-between flex-wrap items-center"><span className="text-hover font-extrabold text-xl">${item.price}</span> <span className="line-through">${(item.price / (1 - item.discountPercentage / 100)).toFixed(2)}</span> <span className="bg-hover text-white font-bold rounded-md px-2">-{item.discountPercentage}%</span></p>
        </div>
        <div className="p-3">
              <button className="bg-hover text-white w-full flex justify-center items-center gap-2 p-2 rounded-md active:scale-95 my-2"><span><ShoppingCart className="w-5 h-5" strokeWidth={2} /></span> <span className="font-medium">Add To Cart</span></button>
        </div>
        console.log("Debugging");
    </div>
  )
}

export default ProductCard