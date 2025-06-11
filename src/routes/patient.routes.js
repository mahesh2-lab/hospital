import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
  addPatient,
  getPatients,
  getPatientById,
  updatePatient,
  deletePatient,
} from "../controllers/patient.controller.js";

const router = express.Router();

router
  .post("/", authMiddleware, addPatient)
  .get("/", authMiddleware, getPatients);

router
  .get("/:id", authMiddleware, getPatientById)
  .put("/:id", authMiddleware, updatePatient) 
  .delete("/:id", authMiddleware, deletePatient); 
export default router;
