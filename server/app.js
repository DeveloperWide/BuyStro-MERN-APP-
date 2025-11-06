import express from "express";
import cors from "cors";
const app = express();
import { connectDb } from "./db/connect.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();

// Routes
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";

app.use(express.json()); // Parse JSON Data
app.use(express.urlencoded({ extended: true })); //Parse form Data
app.use(cookieParser());

// Connect TO Db
connectDb()
  .then((res) => {
    console.log("Connected To DB");
  })
  .catch((err) => {
    console.log("Database Err", err);
  });

// Accept incoming req from client
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
  })
);

// routes api
app.use("/api/auth/", authRoutes);
app.use("/api/product/", productRoutes);

app.listen(8080, () => {
  console.log("Server is running on PORT 8080");
});
