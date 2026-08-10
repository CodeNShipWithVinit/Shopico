import Logo from "../../assets/Shopico_logo.png";
import { Search, User, Heart, ShoppingCart } from "lucide-react";
const Header = () => {
  return (
        <header className="bg-section shadow flex justify-between">
            <div className="w-[12%] p-5">
                <img src={Logo} alt="Main Logo" className="w-full"/>
            </div>

            <div className="flex items-center">
                <ul className="flex gap-7 font-medium cursor-pointer">
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Categories</li>
                    <li>Deals</li>
                    <li>New Arrivals</li>
                </ul>
            </div>

            <div className="flex items-center w-[18%]">
                <ul className="flex gap-10 items-center">
                    <li><Search className="w-5 h-5 cursor-pointer" strokeWidth={2} /></li>
                    <li><User className="w-5 h-5 cursor-pointer" strokeWidth={2} /></li>
                    <li><Heart className="w-5 h-5 cursor-pointer" strokeWidth={2} /></li>
                    <li><div className="relative cursor-pointer">
        <ShoppingCart className="w-5 h-5" strokeWidth={2} />
        <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
          5
        </span>
      </div></li>
                </ul>
            </div>
        </header> 
  )
}

export default Header