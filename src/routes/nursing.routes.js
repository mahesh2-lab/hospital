import { Router } from 'express';
const router = Router();
import { createNursing, getAllNursing, getNursingById, updateNursing, deleteNursing } from '../controllers/nursing.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

// Create a new Nursing record
router.post('/', authMiddleware, createNursing);

// Get all Nursing records
router.get('/', authMiddleware, getAllNursing);

// Get a single Nursing record by ID
router.get('/:id', authMiddleware, getNursingById);

// Update a Nursing record by ID
router.put('/:id', authMiddleware, updateNursing);

// Delete a Nursing record by ID
router.delete('/:id', authMiddleware, deleteNursing);

export default router;