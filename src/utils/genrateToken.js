import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const genrateTokenAndSetCookie = (res, user) => {
<<<<<<< HEAD
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    throw new Error("JWT_SECRET environment variable is not defined");
  }
  const token = jwt.sign({ user }, jwtSecret, {
=======
  const token = jwt.sign({ user }, process.env.JWT_SECRET, {
>>>>>>> c00a5f06db257c64e0c99d1f392f8cf2bb00b1fc
    expiresIn: "15d",
  });
  

   res.cookie("secret", token, {
    httpOnly: true,
    maxAge: 15 * 24 * 60 * 60 * 1000,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  // console.log(`Cookie Data: ${data.json()}`);
};

export default genrateTokenAndSetCookie;
