import { Router } from 'express';
import { getAllContinuations,
    createContinuation,
    getContinuationById,
    updateContinuation,
    deleteContinuation,
 } from '../controllers/continuation.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';


const router = Router();



// Routes
router.get('/', authMiddleware, getAllContinuations);
router.post('/', authMiddleware, createContinuation);
router.get('/:id', authMiddleware, getContinuationById);
router.put('/:id', authMiddleware, updateContinuation);
router.delete('/:id', authMiddleware, deleteContinuation);

export default router;