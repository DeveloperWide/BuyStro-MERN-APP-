import { Minus, Plus, Trash, X } from "lucide-react";
import { truncateText } from "../../utils/helper.jsx";
import { data, Link } from "react-router";
import { deleteItem, updateQuantity } from "../../services/cartService.js";
import { useDispatch, useSelector } from "react-redux";
import { updateItemLocal } from "../../redux/cartSlice/cartSlice.js";

const CartBody = ({ CartItems }) => {
  const dispatch = useDispatch();
  const decQuantity = {
    quantity: 1,
    inc: false,
  };

  const incQuantity = {
    quantity: 1,
    inc: true,
  };

  const handleDecQuantity = async (id, obj) => {
    if (obj.quantity === 1) {
      deleteItem(id)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      updateQuantity(id, obj)
        .then((res) => {
          console.log(res.data.data);
          dispatch(updateItemLocal(id, res.data.updatedItem.quantity));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const handleIncQuantity = async (id, obj) => {
    updateQuantity(id, obj)
      .then((res) => {
        console.log(res.data.updatedItem.quantity);
        dispatch(updateItemLocal(id, res.data.updatedItem.quantity));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <tbody>
      {CartItems &&
        CartItems.map((item, idx) => (
          <tr key={idx} className="border-t-1 border-b-[#333]">
            <td className="pl-2 text-[#dc2626]">
              <X
                size={16}
                strokeWidth={3}
                className="cursor-pointer"
                onClick={() => removeItemHandler(item._id)}
              />
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
              ₹
              <span className="text-lg sm:text-xl md:text-2xl font-semibold">
                {item.price}
              </span>
            </td>
            <td className="border-l text-center ps-4">
              <div className="border-3 border-amber-300 text-black font-semibold flex justify-center items-center gap-4 w-23 py-1 rounded-full">
                <button
                  className="cursor-pointer"
                  onClick={() => handleDecQuantity(item._id, decQuantity)}
                >
                  {item.quantity > 1 ? (
                    <Minus size={16} strokeWidth={3} />
                  ) : (
                    <Trash size={16} strokeWidth={3} />
                  )}
                </button>
                <span className="text-sm">{item.quantity}</span>
                <button
                  className="cursor-pointer"
                  onClick={() => handleIncQuantity(item._id, incQuantity)}
                >
                  <Plus size={16} strokeWidth={3} />
                </button>
              </div>
            </td>
          </tr>
        ))}
    </tbody>
  );
};

export default CartBody;
