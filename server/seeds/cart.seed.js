import Cart from "../models/Cart.js";
import cartItems from "../seeds/data/cart.data.json" with {type: "json"};
import { connectDb } from "../db/connect.js";

connectDb().then((res) => {
    console.log("Successfully Connected");
}).catch((err) => {
    console.log("Error in DB : ");
    console.log(err);
})


const initDb = async (items) => {
    await Cart.deleteMany({});
    const insertedItems = await Cart.insertMany(items);
    console.log(insertedItems);
}

initDb(cartItems);