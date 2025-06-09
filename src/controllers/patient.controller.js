import { PrismaClient } from "@prisma/client";
<<<<<<< HEAD
const prisma = new PrismaClient();

// Create Patient
export const addPatient = async (req, res) => {
  try {
    const {
      uidNo,
      ipdNo,
      wardOrIcu,
      bedRoomNo,
      patientName,
      aadharNo,
      occupation,
      mlcNoPoliceStation,
      address,
      consultantName,
      referringDoctor,
      emergencyContact,
      age,
      sex,
      dateTimeAdmission,
      dateTimeDischarge,
      statusOfDischarge,
      icdCode,
      provisionalDiagnosis,
      finalDiagnosis,
    } = req.body;

    // Required fields validation
    if (
      [
        uidNo,
        ipdNo,
        wardOrIcu,
        bedRoomNo,
        aadharNo,
        age,
        sex,
        statusOfDischarge,
        icdCode,
      ].some((field) => field === undefined || field === "")
    ) {
      return res.status(400).json({ message: "Missing required fields" });
=======

const prisma = new PrismaClient();

export const addPatient = async (req, res) => {
  try {
    const { name, gender, dob, contact, allergies, history } = req.body;

    if ([name, gender, dob, contact].some((field) => !field)) {
      return res.status(400).json({
        message: "All fields are required",
      });
>>>>>>> c00a5f06db257c64e0c99d1f392f8cf2bb00b1fc
    }

    const patient = await prisma.patient.create({
      data: {
<<<<<<< HEAD
        uidNo,
        ipdNo,
        wardOrIcu,
        bedRoomNo,
        patientName,
        aadharNo,
        occupation,
        mlcNoPoliceStation,
        address,
        consultantName,
        referringDoctor,
        emergencyContact,
        age: Number(age),
        sex,
        dateTimeAdmission: dateTimeAdmission ? new Date(dateTimeAdmission) : undefined,
        dateTimeDischarge: dateTimeDischarge ? new Date(dateTimeDischarge) : undefined,
        statusOfDischarge,
        icdCode,
        provisionalDiagnosis,
        finalDiagnosis,
      },
    });

    res.status(201).json({ message: "Patient added successfully", patient });
  } catch (error) {
    res.status(500).json({ message: "Error adding patient", error: error.message });
  }
};

// Get all Patients
export const getPatients = async (req, res) => {
  try {
    const patients = await prisma.patient.findMany();
    res.status(200).json({ message: "Patients retrieved successfully", patients });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving patients", error: error.message });
  }
};

// Get Patient by ID
export const getPatientById = async (req, res) => {
  try {
    const { id } = req.params;
    const patient = await prisma.patient.findUnique({ where: { id: parseInt(id) } });
    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }
    res.status(200).json({ message: "Patient retrieved successfully", patient });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving patient", error: error.message });
  }
};

// Update Patient
export const updatePatient = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    console.log("Update Patient Data:", data);
    console.log("Patient ID:", id);
    
    

    const existingPatient = await prisma.patient.findUnique({ where: { id: parseInt(id) } });
    if (!existingPatient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    // Remove undefined or empty string fields
    const updateData = Object.fromEntries(
      Object.entries(data).filter(
        ([, value]) => value !== undefined && value !== ""
      )
    );

    // Convert dates and age if present
    if (updateData.dateOfAdmission) {
      updateData.dateOfAdmission = new Date(updateData.dateOfAdmission);
    }
    if (updateData.dateOfDischarge) {
      updateData.dateOfDischarge = new Date(updateData.dateOfDischarge);
    }
    if (updateData.age) {
      updateData.age = Number(updateData.age);
    }

=======
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
      message: "Error retrieving patients",
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

>>>>>>> c00a5f06db257c64e0c99d1f392f8cf2bb00b1fc
    const updatedPatient = await prisma.patient.update({
      where: { id: parseInt(id) },
      data: updateData,
    });

<<<<<<< HEAD
    res.status(200).json({ message: "Patient updated successfully", patient: updatedPatient });
  } catch (error) {
    res.status(500).json({ message: "Error updating patient", error: error.message });
  }
};

// Delete Patient
export const deletePatient = async (req, res) => {
  try {
    const { id } = req.params;
    const existingPatient = await prisma.patient.findUnique({ where: { id: parseInt(id) } });
    if (!existingPatient) {
      return res.status(404).json({ message: "Patient not found" });
    }
    await prisma.patient.delete({ where: { id: parseInt(id) } });
    res.status(200).json({ message: "Patient deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting patient", error: error.message });
  }
};
=======
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
>>>>>>> c00a5f06db257c64e0c99d1f392f8cf2bb00b1fc
