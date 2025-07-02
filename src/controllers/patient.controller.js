import { PrismaClient } from "@prisma/client";
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
      diseases,
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
    }

    // Generate mhrNo: "MH" followed by a 5-digit number (e.g., MH12345)
    const mhrNo =
      "MH" +
      Math.floor(10000 + Math.random() * 90000).toString();

    const patient = await prisma.patient.create({
      data: {
      uidNo,
      ipdNo,
      wardOrIcu,
      mhrNo,
      bedRoomNo,
      patientName,
      // fatherName,
      aadharNo,
      age: age ? Number(age) : undefined,
      sex,
      // weight,
      address,
      occupation,
      // regNo,
      dateOfAdmission: dateTimeAdmission
        ? new Date(dateTimeAdmission)
        : undefined,
      dateOfDischarge: dateTimeDischarge
        ? new Date(dateTimeDischarge)
        : undefined,
      // dateOfOperation,
      // surgeryPerformByDoctor,
      // anesthetistDoctor,
      // referringDoctor,
      mlcNoPoliceStation,
      consultantName,
      emergencyContact,
      // performByDoctor,
      diseases, // Assuming this is a placeholder, adjust as needed
      // doctorIncharge,
      // broughtBy,
      // statusOfDischarge,
      // dischargeSummary,
      icdCode,
      provisionalDiagnosis,
      finalDiagnosis,
      },
    });

    res.status(201).json({ message: "Patient added successfully", patient });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding patient", error: error.message });
  }
};

// Get all Patients
export const getPatients = async (req, res) => {
  try {
    const patients = await prisma.patient.findMany();
    res
      .status(200)
      .json({ message: "Patients retrieved successfully", patients });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving patients", error: error.message });
  }
};

// Get Patients with pagination
export const getPaginatedPatients = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    
    // Convert to numbers and validate
    const pageNum = Math.max(1, parseInt(page));
    const limitNum = Math.max(1, Math.min(100, parseInt(limit))); // Max limit of 100
    
    // Calculate skip value
    const skip = (pageNum - 1) * limitNum;
    
    // Get total count for pagination info
    const totalCount = await prisma.patient.count();
    
    // Get paginated patients
    const patients = await prisma.patient.findMany({
      skip,
      take: limitNum,
      orderBy: { id: 'desc' } // Order by newest first
    });
    
    // Calculate pagination metadata
    const totalPages = Math.ceil(totalCount / limitNum);
    const hasNextPage = pageNum < totalPages;
    const hasPrevPage = pageNum > 1;
    
    res.status(200).json({ 
      message: "Patients retrieved successfully", 
      patients,
      pagination: {
        currentPage: pageNum,
        totalPages, 
        totalCount,
        limit: limitNum,
        hasNextPage,
        hasPrevPage
      }
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving patients", error: error.message });
  }
};

// Get Patient by ID
export const getPatientById = async (req, res) => {
  try {
    const { id } = req.params;
    const patient = await prisma.patient.findUnique({
      where: { id: parseInt(id) },
    });
    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }
    res
      .status(200)
      .json({ message: "Patient retrieved successfully", patient });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving patient", error: error.message });
  }
};

// Update Patient
export const updatePatient = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    console.log("Update Patient Data:", data);
    console.log("Patient ID:", id);

    const existingPatient = await prisma.patient.findUnique({
      where: { id: parseInt(id) },
    });
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

    const updatedPatient = await prisma.patient.update({
      where: { id: parseInt(id) },
      data: updateData,
    });

    res
      .status(200)
      .json({
        message: "Patient updated successfully",
        patient: updatedPatient,
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating patient", error: error.message });
  }
};

// Delete Patient
export const deletePatient = async (req, res) => {
  try {
    const { id } = req.params;
    const existingPatient = await prisma.patient.findUnique({
      where: { id: parseInt(id) },
    });
    if (!existingPatient) {
      return res.status(404).json({ message: "Patient not found" });
    }
    await prisma.patient.delete({ where: { id: parseInt(id) } });
    res.status(200).json({ message: "Patient deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting patient", error: error.message });
  }
};


