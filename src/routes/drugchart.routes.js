// routes/medication.js
import express from "express";
import {getMedicationTracker} from "../controllers/drugchart.controller.js";
import {saveMedicationTracker} from "../controllers/drugchart.controller.js";
import {getUserMedicationTrackers} from "../controllers/drugchart.controller.js";
import {updateMedication} from "../controllers/drugchart.controller.js";
import { deleteMedicationTracker } from "../controllers/drugchart.controller.js";
import { deleteMedication } from "../controllers/drugchart.controller.js";

const router = express.Router();

// Define routes
router.get("/tracker", getMedicationTracker);
router.post("/tracker", saveMedicationTracker);
router.delete("/tracker/:trackerId", deleteMedicationTracker);
router.get("/user/:patientId/trackers", getUserMedicationTrackers);
router.put("/medication/:medicationId", updateMedication);
router.delete("/medication/:medicationId", deleteMedication);

export default router;
