import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../redux/cartSlice/cartSlice";
import { useEffect } from "react";
import { Minus, Plus, Trash, X } from "lucide-react";
import { truncateText } from "../utils/helper.jsx";
import { Link } from "react-router";
import axiosInstance from "../utils/axiosInstance";

const CartItems = () => {
  const auth = useSelector((state) => state.auth.accessToken);
  const dispatch = useDispatch();
  useEffect(() => {
    axiosInstance
      .get("/cart/all")
      .then((res) => {
        console.log(res.data.cart);
        dispatch(setCart(res.data.cart));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);

  if (!cart) return <div>NO Items in Cart</div>;
  return (
    <table className="w-[99%] my-4 mx-1">
      <thead>
        <tr>
          <th></th>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {cart.items.map((item, idx) => (
          <tr key={idx} className="border-t-1 border-b-[#333]">
            <td className="pl-2 text-[#dc2626]">
              <X size={16} strokeWidth={3} className="cursor-pointer" />
            </td>

            <td className=" py-3">
              <Link
                to={`/product/${item.Product._id}`}
                className="flex gap-3 items-center"
              >
                <img
                  src={item.Product.images[0]}
                  alt={item.title}
                  className="h-20"
                />
                <p className="hidden sm:block text-lg">
                  {truncateText(item.Product.title, 30)}
                </p>
              </Link>
            </td>

            <td className="text-sm font-mono border-l text-center">
              ₹<span className="text-2xl font-semibold">{item.price}</span>
            </td>
            <td className="border-l text-center">
              <div className="border-3 border-amber-300 text-black font-semibold flex justify-center items-center gap-4 w-23 py-1 rounded-full">
                <button className="cursor-pointer">
                  {item.quantity > 1 ? (
                    <Minus size={16} strokeWidth={3} />
                  ) : (
                    <Trash size={16} strokeWidth={3} />
                  )}
                </button>
                <span className="text-sm">{item.quantity}</span>
                <button className="cursor-pointer">
                  <Plus size={16} strokeWidth={3} />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr className="border-t text-xl">
          <th colSpan={2} className="text-center px-[25%]">
            Total Price
          </th>
          <th colSpan={2} className="text-center px-[7%] text-md border-l">
            ₨ <span className="text-3xl">{cart.totalPrice}</span>
          </th>
        </tr>
      </tfoot>
    </table>
  );
};

export default CartItems;
