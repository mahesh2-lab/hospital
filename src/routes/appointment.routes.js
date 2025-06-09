import Router from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { roleMiddleware } from "../middlewares/role.middleware.js";
import * as appointmentController from "../controllers/appointment.controller.js";

const router = Router();

const role = roleMiddleware("admin", "doctor");

router.post(
  "/book",
  authMiddleware,
  role,
  appointmentController.bookAppointment
);

router.get(
  "/get-appointments",
  authMiddleware,
  role,
  appointmentController.getAppointments
);

router.get(
  "/:id",
  authMiddleware,
  role,
  appointmentController.getAppointmentById
);

router.put(
  "/:id",
  authMiddleware,
  role,
  appointmentController.updateAppointment
);

router.delete(
  "/:id",
  authMiddleware,
  role,
  appointmentController.deleteAppointment
);

router.get(
  "/doctor/:doctorId",
  authMiddleware,
  role,
  appointmentController.getAppointmentsByDoctorId
);

router.get(
  "/patient/:patientId",
  authMiddleware,
  role,
  appointmentController.getAppointmentsByPatientId
);

router.get(
  "/doctor/:doctorId/patient/:patientId",
  authMiddleware,
  role,
  appointmentController.getAppointmentsByPatientAndDoctor
);

export default router;
