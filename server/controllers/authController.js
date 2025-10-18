import User from '../models/User.js';

export const signup = async (req, res) => {
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

  return res.status(201).json({
    success: true,
    message: 'User created Successfully',
    user: {
      id: svdUser._id,
      name: svdUser.name,
      email: svdUser.email,
      role: svdUser.role,
    },
  });
};

export const login = async (req, res) => {
  res.send("You're on Login Page");
};

export const getMe = async (req, res) => {
  res.send("You're on Me Route");
};
