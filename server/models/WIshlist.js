import mongoose from "mongoose";
const { Schema, model } = mongoose;

const wishlistSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  items: [
    {
      Product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],

  totlePrice: {
    type: Number,
    required: true,
  },
});

wishlistSchema.pre("save", function (next) {
  this.totlePrice = this.items.reduce((acc, item) => acc + item.price, 0);
  next();
});

const Wishlist = model("Wishlist", wishlistSchema);
export default Wishlist;
