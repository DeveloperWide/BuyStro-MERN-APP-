import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import { getUserObj } from '../lib/helper.js';

const JWT_SECRET =
  process.env.JWT_SECRET || '748342200ced2da87e30e104c935c39719c5f6d8';

export const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const existingUser = await User.findOne({ email });

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'All Fields are Required',
      });
    }

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: 'User already Exist.',
      });
    }

    const strictEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!strictEmailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'PLease Enter a valid email Address',
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Password Must be atleast 6 character long.',
      });
    }

    const user = new User({
      name,
      email,
      password,
      role,
    });

    const svdUser = await user.save();

    const userInfo = getUserObj(
      svdUser._id,
      svdUser.name,
      svdUser.email,
      svdUser.role
    );

    const token = jwt.sign(userInfo, JWT_SECRET, { expiresIn: '7d' });

    return res.status(201).json({
      success: true,
      token,
      message: 'User created Successfully',
      user: userInfo,
    });
  } catch (err) {
    console.log('Server Error : ', err);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error...',
    });
  }
};

export const login = async (req, res) => {
  try {
    let { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'All fields are Required',
      });
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({
        success: false,
        message: 'Invalid Crendentials',
      });
    }

    const userInfo = getUserObj(
      existingUser._id,
      existingUser.name,
      existingUser.email,
      existingUser.role
    );

    const isCorrectPassword = await existingUser.comparePassword(password);
    if (!isCorrectPassword) {
      return res.status(400).json({
        success: false,
        message: 'Invalid Crendentials',
      });
    }

    const token = jwt.sign(userInfo, JWT_SECRET, { expiresIn: '7d' });

    res.status(201).json({
      success: true,
      token,
      message: "You're successfully log in.",
    });
  } catch (err) {
    console.log('Server Error', err);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error...',
    });
  }
};

export const getMe = async (req, res) => {
  res.send("You're Signed in.");
};
