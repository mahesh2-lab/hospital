import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Helper: Validate ID param
function validateId(id) {
    const num = Number(id);
    return Number.isInteger(num) && num > 0;
}

// Helper: Validate IpdChart input
function validateIpdChartInput(body) {
    if (
        !body ||
        typeof body.chiefComplaints !== 'string' ||
        typeof body.hopi !== 'string' ||
        (body.previousInvestigations && typeof body.previousInvestigations !== 'string') ||
        (body.systemicExamination && typeof body.systemicExamination !== 'string') ||
        (body.localExamination && typeof body.localExamination !== 'string') ||
        (body.provisionalDiagnosis && typeof body.provisionalDiagnosis !== 'string') ||
        (body.finalDiagnosis && typeof body.finalDiagnosis !== 'string') ||
        !validateId(body.patientId)
    ) {
        return false;
    }
    return true;
}

// Create a new IpdChart
export async function createIpdChart(req, res) {
    try {
        if (!validateIpdChartInput(req.body)) {
            return res.status(400).json({ error: 'Invalid input data' });
        }
        const { chiefComplaints, hopi, previousInvestigations, systemicExamination, localExamination, provisionalDiagnosis, finalDiagnosis, patientId } = req.body;
        const ipdChart = await prisma.ipdChart.create({
            data: {
                date: new Date(), // Always set to current date/time
                chiefComplaints,
                hopi,
                previousInvestigations,
                systemicExamination,
                localExamination,
                provisionalDiagnosis,
                finalDiagnosis,
                patientId: Number(patientId),
            },
        });
        res.status(201).json(ipdChart);
    } catch (error) {
        res.status(500).json({ error: 'Server error', details: error.message });
    }
}

// Get all IpdCharts
export async function getAllIpdCharts(req, res) {
    try {
        const ipdCharts = await prisma.ipdChart.findMany();
        res.json(ipdCharts);
    } catch (error) {
        res.status(500).json({ error: 'Server error', details: error.message });
    }
}

// Get a single IpdChart by ID
export async function getIpdChartById(req, res) {
    try {
        const { id } = req.params;
        if (!validateId(id)) {
            return res.status(400).json({ error: 'Invalid ID' });
        }
        const ipdChart = await prisma.ipdChart.findUnique({
            where: { id: Number(id) },
        });
        if (!ipdChart) {
            return res.status(404).json({ error: 'IpdChart not found' });
        }
        res.json(ipdChart);
    } catch (error) {
        res.status(500).json({ error: 'Server error', details: error.message });
    }
}

// Update an IpdChart by ID
export async function updateIpdChart(req, res) {
    try {
        const { id } = req.params;
        if (!validateId(id) || !validateIpdChartInput(req.body)) {
            return res.status(400).json({ error: 'Invalid input data' });
        }
        const { chiefComplaints, hopi, previousInvestigations, systemicExamination, localExamination, provisionalDiagnosis, finalDiagnosis, patientId } = req.body;
        const ipdChart = await prisma.ipdChart.update({
            where: { id: Number(id) },
            data: {
                date: new Date(), // Always set to current date/time
                chiefComplaints,
                hopi,
                previousInvestigations,
                systemicExamination,
                localExamination,
                provisionalDiagnosis,
                finalDiagnosis,
                patientId: Number(patientId),
            },
        });
        res.json(ipdChart);
    } catch (error) {
        if (error.code === 'P2025') {
            return res.status(404).json({ error: 'IpdChart not found' });
        }
        res.status(500).json({ error: 'Server error', details: error.message });
    }
}

// Delete an IpdChart by ID
export async function deleteIpdChart(req, res) {
    try {
        const { id } = req.params;
        if (!validateId(id)) {
            return res.status(400).json({ error: 'Invalid ID' });
        }
        await prisma.ipdChart.delete({
            where: { id: Number(id) },
        });
        res.json({ message: 'IpdChart deleted successfully' });
    } catch (error) {
        if (error.code === 'P2025') {
            return res.status(404).json({ error: 'IpdChart not found' });
        }
        res.status(500).json({ error: 'Server error', details: error.message });
    }
}
