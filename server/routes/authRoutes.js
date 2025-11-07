import express from "express";
const router = express.Router({});
import jwt from "jsonwebtoken";
import {
  signup,
  login,
  logout,
  refreshToken,
} from "../controllers/authController.js";

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.get("/refresh", refreshToken);

export default router;
