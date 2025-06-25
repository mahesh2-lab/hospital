import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const saveOrUpdateAnaesthesia = async (req, res) => {
  try {
    const data = req.body;

    console.log(data.patientId);

    // Check if record exists by patientId (using findFirst since it's not a unique field)
    const existingAnaesthesia = await prisma.anesthetia.findFirst({
      where: { patientId: parseInt(data.patientId) },
    });

    if (existingAnaesthesia) {
      // Update using the id field which is the unique identifier
      const updatedAnaesthesia = await prisma.anesthetia.update({
        where: { id: existingAnaesthesia.id },
        data: data,
      });

      return res.status(200).json({
        success: true,
        message: "Anaesthesia record updated successfully",
        data: updatedAnaesthesia,
      });
    }

    // If no existing record, create new record
    const newAnaesthesia = await prisma.anesthetia.create({
      data: data,
    });

    return res.status(201).json({
      success: true,
      message: "Anaesthesia record created successfully",
      data: newAnaesthesia,
    });
  } catch (error) {
    console.error("Error saving/updating anaesthesia record:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to save/update anaesthesia record",
      error: error.message,
    });
  }
};

/**
 * Get anaesthesia record by ID
 */
export const getAnaesthesiaById = async (req, res) => {
  try {
    const { patientId } = req.params;

    const anaesthesia = await prisma.anesthetia.findFirst({
      where: { patientId: parseInt(patientId) },
    });

    if (!anaesthesia) {
      return res.status(404).json({
        success: false,
        message: "Anaesthesia record not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: anaesthesia,
    });
  } catch (error) {
    console.error("Error fetching anaesthesia record:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch anaesthesia record",
      error: error.message,
    });
  }
};

/**
 * Get anaesthesia record by patient ID
 */
export const getAnaesthesiaByPatientId = async (req, res) => {
  try {
    const { patientId } = req.params;

    const anaesthesia = await prisma.anesthetia.findFirst({
      where: { patientId: parseInt(patientId) },
    });

    if (!anaesthesia) {
      return res.status(404).json({
        success: false,
        message: "Anaesthesia record not found for this patient",
      });
    }

    return res.status(200).json({
      success: true,
      data: anaesthesia,
    });
  } catch (error) {
    console.error("Error fetching anaesthesia record:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch anaesthesia record",
      error: error.message,
    });
  }
};

/**
 * Get all anaesthesia records
 * Supports optional pagination
 */
export const getAllAnaesthesia = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const anaesthesia = await prisma.anesthetia.findMany({
      skip: skip,
      take: parseInt(limit),
      orderBy: {
        id: 'desc'  // Changed from createdAt since it's not in the schema
      }
    });

    const total = await prisma.anesthetia.count();

    return res.status(200).json({
      success: true,
      data: anaesthesia,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    console.error("Error fetching anaesthesia records:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch anaesthesia records",
      error: error.message,
    });
  }
};