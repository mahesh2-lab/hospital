import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
  addPatient,
  getPatients,
  getPaginatedPatients,
  getPatientById,
  updatePatient,
  deletePatient,
} from "../controllers/patient.controller.js";

const router = express.Router();

// Create a new patient
router.post("/", authMiddleware, addPatient);

// Get all patients (without pagination)
router.get("/", authMiddleware, getPatients);

// Get patients with pagination
router.get("/paginated", authMiddleware, getPaginatedPatients);

// Get patient by ID
router.get("/:id", authMiddleware, getPatientById);

// Update patient by ID
router.put("/:id", authMiddleware, updatePatient);

// Delete patient by ID
router.delete("/:id", authMiddleware, deletePatient);

export default router;
