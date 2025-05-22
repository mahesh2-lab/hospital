import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addPatient = async (req, res) => {
  try {
    const { name, gender, dob, contact, allergies, history } = req.body;

    if ([name, gender, dob, contact].some((field) => !field)) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const patient = await prisma.patient.create({
      data: {
        name,
        gender,
        dob,
        contact,
        allergies,
        history,
      },
    });

    res.status(201).json({
      message: "Patient added successfully",
      patient,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding patient",
      error: error.message,
    });
  }
};

export const getPatients = async (req, res) => {
  try {
    const patients = await prisma.patient.findMany();

    res.status(200).json({
      message: "Patients retrieved successfully",
      patients,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding patient",
      error: error.message,
    });
  }
};

export const getPatientById = async (req, res) => {
  try {
    const { id } = req.params;

    const patient = await prisma.patient.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!patient) {
      return res.status(404).json({
        message: "Patient not found",
      });
    }

    res.status(200).json({
      message: "Patient retrieved successfully",
      patient,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving patient",
      error: error.message,
    });
  }
};


export const updatePatient = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, gender, dob, contact, allergies, history } = req.body;

    const existingPatient = await prisma.patient.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existingPatient) {
      return res.status(404).json({
        message: "Patient not found",
      });
    }

    const fields = { name, gender, dob, contact, allergies, history };
    const updateData = Object.fromEntries(
      Object.entries(fields).filter(
      ([, value]) => value !== undefined && value !== ""
      )
    );

    const updatedPatient = await prisma.patient.update({
      where: { id: parseInt(id) },
      data: updateData,
    });

    res.status(200).json({
      message: "Patient updated successfully",
      patient: updatedPatient,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating patient",
      error: error.message,
    });
  }
}


export const deletePatient = async (req, res) => {
  try {
    const { id } = req.params;

    const existingPatient = await prisma.patient.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existingPatient) {
      return res.status(404).json({
        message: "Patient not found",
      });
    }

    await prisma.patient.delete({
      where: { id: parseInt(id) },
    });

    res.status(200).json({
      message: "Patient deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting patient",
      error: error.message,
    });
  }
}