import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { roleMiddleware } from "../middlewares/role.middleware.js";
import { addDoctor, deleteDoctor, getDoctorById, getDoctors, updateDoctor } from "../controllers/doctor.controller.js";

const router = Router();

const role = roleMiddleware("admin");

router.post("/adddoctor", authMiddleware, role, addDoctor);
router.get("/getdoctor", authMiddleware, role, getDoctors);
router.get('/getdoctor/:id', authMiddleware, role, getDoctorById);
router.put('/updateDoctor/:id', authMiddleware, role, updateDoctor);
router.delete('/deleteDoctor/:id', authMiddleware, role, deleteDoctor);


export default router
