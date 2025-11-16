import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../redux/cartSlice/cartSlice";
import { useEffect } from "react";
import CartBody from "../components/Cart/CartBody.jsx";
import CartFooter from "../components/Cart/CartFooter.jsx";
import CartHeader from "../components/Cart/CartHeader.jsx";
import { getCart } from "../services/cartService.js";

const CartItems = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getCart()
      .then((res) => {
        dispatch(setCart(res.data.cart));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const cart = useSelector((state) => state.cart.cart);

  if (!cart) return <div>NO Items in Cart</div>;

  return (
    <table className="w-[99%] my-4 mx-1">
      {/* Cart Head */}
      <CartHeader />

      {/* CartBody Component */}
      <CartBody CartItems={cart.items} />

      {/* Cart Foot  */}
      <CartFooter Cart={cart} />
    </table>
  );
};

export default CartItems;
