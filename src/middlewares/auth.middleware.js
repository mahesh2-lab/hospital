import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.secret || req.headers.authorization?.split(" ")[1];

    

    if (!token) {
      return res.status(401).json({
        message: "You are not authorized to access resource",
      });
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(401).json({
          message: "Invalid token",
        });
      }

      

      const user = await prisma.user.findUnique({
        where: {
          id: decoded.user.id,
        },
      });

      if (!user) {
        return res.status(401).json({
          message: "User not found",
        });
      }

      req.user = {...user, password: undefined };      

      next();
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
