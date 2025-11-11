import mongoose from "mongoose";
const { Schema, model } = mongoose;

const cartSchema = new Schema(
  {
    items: [
      {
        Product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true, default: 1, min: 1 },
      },
    ],
    totalPrice: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Cart = model("Cart", cartSchema);

export default Cart;
