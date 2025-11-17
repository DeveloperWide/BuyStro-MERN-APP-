import jwt from "jsonwebtoken";
import Cart from "../models/Cart.js";

const JWT_ACCESS =
  process.env.JWT_ACCESS || "748342200ced2da87e30e104c935c39719c5f6d8";
const JWT_REFRESH =
  process.env.JWT_REFRESH || "d9fd1c4ddcecc467dfd4e7f0fd599b64c2900a07";

export function getUserObj(id, name, email, role) {
  return { id, name, email, role };
}

export const generateToken = (userId) => {
  const accessToken = jwt.sign({ userId }, JWT_ACCESS, { expiresIn: "10m" });
  const refreshToken = jwt.sign({ userId }, JWT_REFRESH, { expiresIn: "7d" });

  return { refreshToken, accessToken };
};

export const sendRefreshToken = (res, refreshToken) => {
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};

export const createCart = async (user) => {
  return await Cart.create({
    user,
    items: [],
  });
};
