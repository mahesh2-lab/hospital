import { Router } from 'express';
const router = Router();
import { createIpdChart, getAllIpdCharts, getIpdChartById, updateIpdChart, deleteIpdChart } from '../controllers/ipd.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

// Create a new IpdChart
router.post('/', authMiddleware, createIpdChart);

// Get all IpdCharts
router.get('/', authMiddleware, getAllIpdCharts);

// Get a single IpdChart by ID
router.get('/:id', authMiddleware, getIpdChartById);

// Update an IpdChart by ID
router.put('/:id', authMiddleware, updateIpdChart);

// Delete an IpdChart by ID
router.delete('/:id', authMiddleware, deleteIpdChart);

export default router;