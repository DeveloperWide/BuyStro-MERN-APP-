import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../redux/cartSlice/cartSlice";
import { useEffect } from "react";
import CartBody from "../components/Cart/CartBody.jsx";
import CartFooter from "../components/Cart/CartFooter.jsx";
import CartHeader from "../components/Cart/CartHeader.jsx";

const CartItems = () => {
  const cart = useSelector((state) => state.cart.cart);

  console.log(cart);
  if (!cart) return <div>No Cart</div>;

  return (
    <div className="div">
      <table className="w-full">
        {/* Cart Head */}
        <CartHeader />

        {/* CartBody Component */}
        <CartBody CartItems={cart.items || []} />

        {/* Cart Foot  */}
        <CartFooter Cart={cart} />
      </table>
    </div>
  );
};

export default CartItems;
