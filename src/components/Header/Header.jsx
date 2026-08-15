import Logo from "../../assets/Shopico_logo.png";
import { Search, User, Heart, ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-section shadow px-4 py-4 lg:px-8">
      <div className="flex items-center justify-between">
        <div className="w-32 shrink-0">
          <img src={Logo} alt="Main Logo" className="block w-full h-auto" />
        </div>

        <nav className="hidden lg:flex items-center">
          <ul className="flex gap-5 cursor-pointer font-bold">
            <li>Home</li>
            <li>Shop</li>
            <li>Categories</li>
            <li>Deals</li>
            <li>New Arrivals</li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <nav className="flex items-center shrink-0">
            <ul className="flex gap-3 sm:gap-6 items-center">
              <li>
                <Search className="w-5 h-5 cursor-pointer" strokeWidth={2} />
              </li>
              <li>
                <User className="w-5 h-5 cursor-pointer" strokeWidth={2} />
              </li>
              <li>
                <Heart className="w-5 h-5 cursor-pointer" strokeWidth={2} />
              </li>
              <li>
                <div className="relative cursor-pointer">
                  <ShoppingCart className="w-5 h-5" strokeWidth={2} />
                  <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    5
                  </span>
                </div>
              </li>
            </ul>
          </nav>

          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">
            <Menu className="w-6 h-6 cursor-pointer" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="lg:hidden">
          <ul className="flex flex-col gap-5 p-4 cursor-pointer font-bold">
            <li>Home</li>
            <li>Shop</li>
            <li>Categories</li>
            <li>Deals</li>
            <li>New Arrivals</li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
