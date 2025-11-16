import { Heart, ShoppingCart, Zap } from "lucide-react";
import { addItem } from "../services/cartService.js";
import { addItemLocal } from "../redux/cartSlice/cartSlice.js";
import { useDispatch } from "react-redux";

const ProductButtons = ({ Details }) => {
  const dispatch = useDispatch();
  const productDetails = {
    Product: Details._id,
    price: Details.price,
    quantity: 1,
  };

  const handleAddItem = async (details) => {
    const data = await addItem(details);
    if (data.data.success) {
      console.log(data);
      if (data.data.exists) {
        console.log("NOT adding, Product Already in Card");
      } else {
        dispatch(addItemLocal(data.data.item));
      }
      // ;
    }
  };

  return (
    <div className="btns  flex flex-col px-3 py-3 justify-center items-center">
      {/* Buy Now Button */}
      <button className="buy-now-btn my-2 bg-primary">
        <Zap size={24} strokeWidth={1} absoluteStrokeWidth /> Buy Now
      </button>

      {/* Cart & Wishlist Buttons */}
      <div className="flex justify-center items-center gap-2 px-2 w-full">
        <button
          className="add-cart-btn bg-text hove"
          // TODO: Update Quantity Based on Quantity provided by User

          onClick={() => handleAddItem(productDetails)}
        >
          <ShoppingCart size={18} />
          Cart
        </button>

        <button className="add-wishlist-btn bg-[#dc2626] ">
          <Heart size={18} />
          Wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductButtons;
