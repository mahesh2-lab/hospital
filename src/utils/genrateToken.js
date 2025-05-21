import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const genrateTokenAndSetCookie = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  console.log(`JWT Token: ${token}`);
  

  const data = res.cookie("secret", token, {
    httpOnly: true,
    maxAge: 15 * 24 * 60 * 60 * 1000,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
  });

  // console.log(`Cookie Data: ${data.json()}`);
};

export default genrateTokenAndSetCookie;
