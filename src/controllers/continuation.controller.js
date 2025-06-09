import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

// Create a new Continuation
export async function createContinuation(req, res) {
    try {
        const { date, ClinicalNote, treatment, patientId } = req.body;
        const continuation = await prisma.continuation.create({
            data: { date: new Date(date), ClinicalNote, treatment, patientId },
        });
        res.status(201).json(continuation);
    } catch (error) {
        console.error("Error creating continuation:", error);
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            return res
                .status(400)
                .json({ error: "Invalid data or constraint violation." });
        }
        res.status(500).json({ error: "Internal server error." });
    }
}

// Get all Continuations
export async function getAllContinuations(req, res) {
    try {
        const continuations = await prisma.continuation.findMany();
        res.json(continuations);
    } catch (error) {
        console.error("Error fetching continuations:", error);
        res.status(500).json({ error: "Internal server error." });
    }
}

// Get a single Continuation by ID
export async function getContinuationById(req, res) {
    try {
        const { id } = req.params;
        const continuation = await prisma.continuation.findUnique({
            where: { id: Number(id) },
        });
        if (!continuation) {
            return res.status(404).json({ error: "Continuation not found" });
        }
        res.json(continuation);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Update a Continuation by ID
export async function updateContinuation(req, res) {
    try {
        const { id } = req.params;
        const { date, ClinicalNote, treatment, patientId } = req.body;
        const continuation = await prisma.continuation.update({
            where: { id: Number(id) },
            data: {
                date: date ? new Date(date) : undefined,
                ClinicalNote,
                treatment,
                patientId,
            },
        });
        res.json(continuation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Delete a Continuation by ID
export async function deleteContinuation(req, res) {
    try {
        const { id } = req.params;
        await prisma.continuation.delete({
            where: { id: Number(id) },
        });
        res.json({ message: "Continuation deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
