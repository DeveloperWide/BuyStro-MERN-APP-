import mongoose from "mongoose";
const { Schema, model } = mongoose;

const cartSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
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

cartSchema.pre("save", function (next) {
  this.totalPrice = this.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  next();
});

const Cart = model("Cart", cartSchema);

export default Cart;
