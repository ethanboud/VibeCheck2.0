import { Router, type Request, type Response } from "express";
import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const secretKey = process.env.JWT_SECRET_KEY || "";

// LOGIN functionality
export const login = async (req: Request, res: Response) => {
  const { userName, password } = req.body;

  const user = await User.findOne({
    where: { userName },
  });
  if (!user) {
    return res.status(401).json({ message: "Authentication failed" });
  }

  const passwordIsValid = await bcrypt.compare(password, user.password);
  if (!passwordIsValid) {
    return res.status(401).json({ message: "Authentication failed" });
  }

  // const secretKey = process.env.JWT_SECRET_KEY || '';

  const token = jwt.sign({ userName }, secretKey, { expiresIn: "1h" });
  return res.json({ token });
};

// REGISTER functionality
export const register = async (req: Request, res: Response) => {
  const { userName, password } = req.body;

  // Create new user (password will be hashed automatically via the model hook)
  const newUser = await User.create({ userName, password });

  // Generate JWT token for the new user
  const token = jwt.sign(
    { id: newUser.id, userName: newUser.userName },
    secretKey,
    { expiresIn: "1h" }
  );

  return res
    .status(201)
    .json({ token, user: { id: newUser.id, userName: newUser.userName } });
};

const router = Router();

// POST /login - Login a user
router.post("/login", login);

// POST /register - Register a new User
router.post("/register", register);

export default router;
