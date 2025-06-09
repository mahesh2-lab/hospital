import { PrismaClient } from "@prisma/client";
import genrateTokenAndSetCookie from "../utils/genrateToken.js";
import { comparePassword, hashPassword } from "../utils/hashpassword.js";

const prisma = new PrismaClient();

export const signup = async (req, res) => {
  try {
    const { name, username, password } = req.body;

    if (!name || !username || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        name,
        username,
        password: hashedPassword,
        role : "admin",
      },
    });

    if (!user) {
      return res.status(400).json({
        message: "Error creating user",
      });
    }

    await genrateTokenAndSetCookie(res, user);

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: { ...user, password: undefined },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating user",
      error: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

<<<<<<< HEAD
    console.log("user", user);
    

=======
>>>>>>> c00a5f06db257c64e0c99d1f392f8cf2bb00b1fc
    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    const isMatch = await comparePassword(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    await genrateTokenAndSetCookie(res, user);

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user: { ...user, password: undefined },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error logging in user",
      error: error.message,
    });
  }
};

export const currentUser = async (req, res) => {
  try {

    if (!req.user) {
      return res.status(401).json({
        message: "You are not authorized to access this resource",
      });
    }
    const user = await prisma.user.findUnique({
      where: {
        id: req.user.id,
      },
    });

    res.status(200).json({
      success: true,
      user: { ...user, password: undefined },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching current user",
      error: error.message,
    });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("secret");
    res.status(200).json({
      success: true,
      message: "User logged out successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error logging out user",
      error: error.message,
    });
  }
};
