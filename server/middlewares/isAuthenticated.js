import jwt from "jsonwebtoken";
const JWT_ACCESS =
  process.env.JWT_ACCESS || "748342200ced2da87e30e104c935c39719c5f6d8";

export function isAuthenticated(req, res, next) {
  try {
    const authHeaders = req.headers["authorization"];
    const token = authHeaders && authHeaders.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized : NO TOKEN PROVIDED",
      });
    }

    const decoded = jwt.verify(token, JWT_ACCESS);

    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: "Invalid or Expired Token",
      });
    }

    req.user = decoded;

    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Invalid or Expired Token",
    });
  }
}
