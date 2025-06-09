import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Helper: Validate ID param

// Helper: Validate date string (YYYY-MM-DD or ISO)
function validateDate(date) {
    if (!date) return true; // Allow missing date (will default to now)
    const d = new Date(date);
    return !isNaN(d.getTime());
}

// Helper: Validate Nursing input
function validateNursingInput(body) {
    if (
        !body ||
        (body.date && !validateDate(body.date)) ||
        typeof body.time !== 'string' ||
        isNaN(parseInt(body.pulse)) ||
        typeof body.bp !== 'string' ||
        isNaN(parseInt(body.rr)) ||
        isNaN(parseInt(body.spo2)) ||
        isNaN(parseFloat(body.temperature)) ||
        (body.intake && typeof body.intake !== 'string') ||
        (body.output && typeof body.output !== 'string') ||
        isNaN(parseInt(body.patientId))
    ) {
        return false;
    }
    return true;
}

// Create a new Nursing record
export async function createNursing(req, res) {
    try {
        if (!validateNursingInput(req.body)) {
            return res.status(400).json({ error: 'Invalid input data' });
        }
        const { date, time, pulse, bp, rr, spo2, temperature, intake, output, patientId } = req.body;

        const nursing = await prisma.nursing.create({
            data: {
                date: date ? new Date(date) : new Date(),
                time: String(time),
                pulse: parseInt(pulse),
                bp: String(bp),
                rr: parseInt(rr),
                spo2: parseInt(spo2),
                temperature: parseFloat(temperature),
                intake: intake !== undefined ? String(intake) : undefined,
                output: output !== undefined ? String(output) : undefined,
                patientId: parseInt(patientId),
            },
        });
        res.status(201).json(nursing);
    } catch (error) {
        res.status(500).json({ error: 'Server error', details: error.message });
    }
}

// Get all Nursing records
export async function getAllNursing(req, res) {
    try {
        const nursings = await prisma.nursing.findMany();
        res.json(nursings);
    } catch (error) {
        res.status(500).json({ error: 'Server error', details: error.message });
    }
}

// Get a single Nursing record by ID
export async function getNursingById(req, res) {
    try {
        const { id } = req.params;
        if (!validateId(id)) {
            return res.status(400).json({ error: 'Invalid ID' });
        }
        const nursing = await prisma.nursing.findUnique({
            where: { id: Number(id) },
        });
        if (!nursing) {
            return res.status(404).json({ error: 'Nursing record not found' });
        }
        res.json(nursing);
    } catch (error) {
        res.status(500).json({ error: 'Server error', details: error.message });
    }
}

// Update a Nursing record by ID
export async function updateNursing(req, res) {
    try {
        const { id } = req.params;
        if (!validateNursingInput(req.body)) {
            return res.status(400).json({ error: 'Invalid input data' });
        }
        const { date, time, pulse, bp, rr, spo2, temperature, intake, output, patientId } = req.body;
        const nursing = await prisma.nursing.update({
            where: { id: Number(id) },
            data: {
                date: date ? new Date(date) : new Date(),
                time: String(time),
                pulse: parseInt(pulse),
                bp: String(bp),
                rr: parseInt(rr),
                spo2: parseInt(spo2),
                temperature: parseFloat(temperature),
                intake: intake !== undefined ? String(intake) : undefined,
                output: output !== undefined ? String(output) : undefined,
                patientId: parseInt(patientId),
            },
        });
        res.json(nursing);
    } catch (error) {
        if (error.code === 'P2025') {
            return res.status(404).json({ error: 'Nursing record not found' });
        }
        res.status(500).json({ error: 'Server error', details: error.message });
    }
}

// Delete a Nursing record by ID
export async function deleteNursing(req, res) {
    try {
        const { id } = req.params;
        
        await prisma.nursing.delete({
            where: { id: Number(id) },
        });
        res.json({ message: 'Nursing record deleted successfully' });
    } catch (error) {
        if (error.code === 'P2025') {
            return res.status(404).json({ error: 'Nursing record not found' });
        }
        res.status(500).json({ error: 'Server error', details: error.message });
    }
}