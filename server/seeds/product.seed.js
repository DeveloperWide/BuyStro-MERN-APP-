import  Product  from "../models/Product.js"
import product from "./data/product.data.json" with { type: "json" }
import { connectDb } from "../db/connect.js"

connectDb().then((res) => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log("Error in DB", err)
})

const initData = async (data) => {
    const insertedData = await Product.insertMany(data);
    console.log(insertedData)
}

initData(product);