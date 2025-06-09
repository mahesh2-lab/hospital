import express from "express";
import { signup, login, logout,currentUser } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/current-user", authMiddleware, currentUser);

export default router;
