import express from "express";
import { roleMiddleware } from "../middlewares/role.middleware.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { addPatient, getPatients } from "../controllers/patient.controller.js";

const router = express.Router();

router.post("/patients", authMiddleware, roleMiddleware("admin", "doctor"), addPatient);
router.get("/patients", authMiddleware, roleMiddleware("admin", "doctor"), getPatients);

export default router;