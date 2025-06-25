import express from 'express';
import {saveOrUpdateAnaesthesia, getAnaesthesiaById, getAllAnaesthesia} from "../controllers/anaesthetia.controller.js"
import {authMiddleware} from '../middlewares/auth.middleware.js'

const router = express.Router();

router.get('/', authMiddleware, getAllAnaesthesia);
router.get('/:patientId', authMiddleware, getAnaesthesiaById);
router.post('/', authMiddleware, saveOrUpdateAnaesthesia);

export default router;
