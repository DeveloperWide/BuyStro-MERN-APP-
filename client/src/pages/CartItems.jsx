import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../redux/cartSlice/cartSlice";
import { useEffect } from "react";
import { X } from "lucide-react";
import { truncateText } from "../utils/helper";
import { Link } from "react-router";

const CartItems = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/api/cart/all")
      .then((res) => {
        console.log(res.data.cartItems);
        dispatch(setCart(res.data.cartItems));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const items = useSelector((state) => state.cart.items);
  console.log(items);
  return (
    <table className="w-[99%] my-4 mx-1">
      <thead>
        <tr>
          <th></th>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, idx) => (
          <tr key={idx} className="border-t-1 border-b-[#333]">
            <td className="pl-2 text-[#dc2626]">
              <X size={16} strokeWidth={3} className="cursor-pointer" />
            </td>
            <Link to={`/product/${item._id}`}>
              <td className="flex gap-3 py-3">
                <img src={item.image} alt={item.title} className="h-20" />
                <p>{truncateText(item.title, 19)}</p>
              </td>
            </Link>

            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td className="pr-4">{item.quantity * item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CartItems;
