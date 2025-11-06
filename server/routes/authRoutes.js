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

router.get("/refresh", refreshToken);

router.post("/logout", logout);

export default router;
