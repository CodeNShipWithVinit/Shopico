import { ShoppingCart } from "lucide-react";
const ProductCard = ({item}) => {
  return (
    <div className="w-80 rounded-xl shadow-2xl m-3 p-3">
        <img src={item.thumbnail} alt="Thumbnail" className="w-[3/4] object-cover bg-light" />
        <div className="flex flex-col gap-3 p-1">
            <span className="text-hover font-extrabold px-3 uppercase">{item.category}</span>
            <h1 className="font-bold uppercase">{item.title}</h1>
            <p><span className="font-medium">⭐ {item.rating.toFixed(1)}</span> <span>({item.reviews?.length || 0})</span></p>
            <p className="flex justify-between"><span className="text-hover font-extrabold text-xl">${item.price}</span> <span className="line-through">${(item.price / (1 - item.discountPercentage / 100)).toFixed(2)}</span> <span className="bg-hover text-white font-bold rounded-md px-2">-{item.discountPercentage}%</span></p>
        </div>
        <button className="bg-hover text-white w-full flex justify-center items-center gap-2 p-2 rounded-md active:scale-95 my-2"><span><ShoppingCart className="w-5 h-5" strokeWidth={2} /></span> <span className="font-medium">Add To Cart</span></button>
    </div>
  )
}

export default ProductCard