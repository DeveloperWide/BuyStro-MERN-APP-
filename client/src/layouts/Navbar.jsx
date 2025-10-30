import { ShoppingCart } from "lucide-react";
import SearchInput from "../components/SearchInput";

const Navbar = () => {
  return (
    <nav className="flex items-center z-20 justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-[#B8C4A9] text-[#F4E9D7]  relative transition-all">
      {/* BuyStro Logo */}
      <div className="logo flex gap-1 justify-center items-center">
        <img
          src="/shopping-cart.png"
          alt="BuyStro Logo"
          className="h-10"
        />
        <img
          src="/BuyStro.png"
          alt="BuyStro Logo"
          className="h-8 self-end"
        />
      </div>

      <SearchInput />

      <div className="flex items-center gap-8">
        {/* 🛒 Cart Icon */}
        <div className="relative cursor-pointer group">
          <i className="fa-solid fa-cart-shopping text-[28px] text-[#6FA4AF] transition-all duration-300 group-hover:text-[#D97D55]"></i>
          <button className="absolute -top-1 -right-2 text-[11px] font-semibold text-[#F4E9D7] bg-[#D97D55] w-[18px] h-[18px] rounded-full flex items-center justify-center">
            3
          </button>
        </div>

        {/* ❤️ Heart Icon */}
        <div className="relative cursor-pointer group">
          <i className="fa-solid fa-heart text-[28px] text-[#6FA4AF] transition-all duration-300 group-hover:text-[#D97D55]"></i>
          <button className="absolute -top-1 -right-2 text-[11px] font-semibold text-[#F4E9D7] bg-[#D97D55] w-[18px] h-[18px] rounded-full flex items-center justify-center">
            3
          </button>
        </div>

        <button className="cursor-pointer px-8 py-2 bg-[#AA3400] hover:bg-[#D97D55] transition text-[#F4E9D7] rounded-full font-semibold">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
