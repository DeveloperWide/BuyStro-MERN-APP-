import SearchInput from "../components/SearchInput";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice/authSlice";
import axios from "axios";
import { Link } from "react-router";
import { LogOut } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useDispatch();
  let items = useSelector((state) => state.cart?.cart?.items);

  const handleLogout = () => {
    const confirmation = confirm("Do You Want to Logout..?");
    if (confirmation) {
      dispatch(logout());
      axios.post("/api/auth/logout");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${isScrolled ? "navbar scrolled" : "navbar"}`}>
      {/* BuyStro Logo */}
      <Link to="/" className="logo pr-5 flex gap-1">
        <img src="/BuyStro.png" alt="BuyStro Logo" className="h-13 " />
        <h1 className="self-end  hidden md:block text-3xl text-[#ff9648]">
          uyStro
        </h1>
      </Link>

      <SearchInput />
      <div className="flex items-center gap-8">
        {/* 🛒 Cart Icon */}
        <Link to="/cart" className="relative cursor-pointer group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            color="white"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="icon icon-tabler hover:text-[#ff9648] icons-tabler-filled icon-tabler-shopping-cart"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 2a1 1 0 0 1 .993 .883l.007 .117v1.068l13.071 .935a1 1 0 0 1 .929 1.024l-.01 .114l-1 7a1 1 0 0 1 -.877 .853l-.113 .006h-12v2h10a3 3 0 1 1 -2.995 3.176l-.005 -.176l.005 -.176c.017 -.288 .074 -.564 .166 -.824h-5.342a3 3 0 1 1 -5.824 1.176l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-12.17h-1a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 .883 -.993l.117 -.007h2zm0 16a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm11 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z" />
          </svg>

          {items && (
            <button
              className={` absolute -top-1 -right-2 text-[11px] font-semibold ${
                items.length > 9 ? "text-pink-300" : "text-[#F4E9D7]"
              } bg-text w-[20px] h-[20px] rounded-full flex items-center justify-center`}
            >
              {items.length > 9 ? "9+" : items.length}
            </button>
          )}
        </Link>

        {/* ❤️ Heart Icon */}
        <Link to="/wishlist" className="relative group hidden lg:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            color="pink"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon  icon-tabler hover:text-[#ff9648] icons-tabler-outline icon-tabler-shopping-bag-heart text-[22px]"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M11.5 21h-2.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304c-.057 .368 -.1 .644 -.127 .828" />
            <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
            <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z" />
          </svg>
          <button className="absolute  rounded-2xl  -top-0 -right-2 text-[11px] font-semibold text-[#F4E9D7] bg-text w-[18px] h-[18px] flex items-center justify-center shadow-md">
            3
          </button>
        </Link>

        <a
          className="text-white text-2xl hidden md:block hover:text-red-600 uppercase active:text-primary cursor-pointer font-semibold"
          onClick={handleLogout}
          title="LogOut"
        >
          <LogOut size={28} strokeWidth={3} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
