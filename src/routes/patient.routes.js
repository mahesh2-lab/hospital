import express from "express";
<<<<<<< HEAD
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
=======
import { roleMiddleware } from "../middlewares/role.middleware.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { addPatient, getPatients } from "../controllers/patient.controller.js";

const router = express.Router();

router.post("/patients", authMiddleware, roleMiddleware("admin", "doctor"), addPatient);
router.get("/patients", authMiddleware, roleMiddleware("admin", "doctor"), getPatients);

export default router;
>>>>>>> c00a5f06db257c64e0c99d1f392f8cf2bb00b1fc
