import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { generateToken, sendRefreshToken } from "../lib/helper.js";

const JWT_ACCESS =
  process.env.JWT_ACCESS || "748342200ced2da87e30e104c935c39719c5f6d8";
const JWT_REFRESH =
  process.env.JWT_REFRESH || "d9fd1c4ddcecc467dfd4e7f0fd599b64c2900a07";

export const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const existingUser = await User.findOne({ email });

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All Fields are Required",
      });
    }

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already Exist.",
      });
    }

    const strictEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!strictEmailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "PLease Enter a valid email Address",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password Must be atleast 6 character long.",
      });
    }

    const user = new User({
      ...req.body,
    });

    const svdUser = await user.save();
    const { accessToken, refreshToken } = generateToken(svdUser._id.toString());
    sendRefreshToken(res, refreshToken);

    return res.status(201).json({
      success: true,
      accessToken,
      user: svdUser,
      message: "User created Successfully",
    });
  } catch (err) {
    console.log("Server Error : ", err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error...",
    });
  }
};

export const login = async (req, res) => {
  try {
    let { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are Required",
      });
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({
        success: false,
        message: "Invalid Crendentials",
      });
    }

    const isCorrectPassword = await existingUser.comparePassword(password);
    if (!isCorrectPassword) {
      return res.status(400).json({
        success: false,
        message: "Invalid Crendentials",
      });
    }

    const { refreshToken, accessToken } = generateToken(
      existingUser._id.toString()
    );
    console.log("Access token : ", accessToken);
    console.log("Refresh token : ", refreshToken);
    sendRefreshToken(res, refreshToken);

    res.status(201).json({
      success: true,
      accessToken,
      user: existingUser,
      message: "You're successfully log in.",
    });
  } catch (err) {
    console.log("Server Error", err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error...",
    });
  }
};

export const refreshToken = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  console.log(refreshToken);

  if (!refreshToken) {
    return res.status(401).json({
      message: "No Refresh Token",
    });
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH);

    console.log(decoded);

    const newAccessToken = jwt.sign(
      { userId: decoded.userId },
      process.env.JWT_ACCESS,
      { expiresIn: "10m" }
    );

    const user = await User.findById(decoded.userId);

    return res.status(200).json({
      user,
      accessToken: newAccessToken,
    });
  } catch (err) {
    return res.status(401).json({
      message: "Invalid Refresh Token",
    });
  }
};

export const logout = async (req, res) => {
  res.clearCookie("refreshToken");
};
