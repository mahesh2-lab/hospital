import Router from "express";
import {authMiddleware} from "../middlewares/auth.middleware.js";
import {roleMiddleware} from "../middlewares/role.middleware.js";
import * as appointmentController from "../controllers/appointment.controller.js";

const router = Router();

const role = roleMiddleware("admin", "doctor");

router.post(
  "/book",
  authMiddleware,
  role,
  appointmentController.bookAppointment
);


export default router;