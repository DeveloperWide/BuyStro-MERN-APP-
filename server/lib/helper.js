import jwt from "jsonwebtoken";

const JWT_ACCESS =
  process.env.JWT_ACCESS || "748342200ced2da87e30e104c935c39719c5f6d8";
const JWT_REFRESH =
  process.env.JWT_REFRESH || "d9fd1c4ddcecc467dfd4e7f0fd599b64c2900a07";

export function getUserObj(id, name, email, role) {
  return { id, name, email, role };
}

export const generateToken = (userId) => {
  console.log("userID: ", userId);
  const accessToken = jwt.sign({ userId }, JWT_ACCESS, { expiresIn: "10m" });
  console.log("access :", accessToken);
  const refreshToken = jwt.sign({ userId }, JWT_REFRESH, { expiresIn: "7d" });
  console.log("refresh :", refreshToken);

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
