import express from 'express';
import {
  createConsentForm,
  getAllConsentForms,
  getConsentFormsByPatientId,
  updateConsentForm,
  deleteConsentForm
} from '../controllers/consent.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/', authMiddleware, getAllConsentForms);
router.post('/', authMiddleware, createConsentForm);
router.get('/:patientId', authMiddleware, getConsentFormsByPatientId);
router.put('/:id', authMiddleware, updateConsentForm);
router.delete('/:id', authMiddleware, deleteConsentForm);

export default router;
