import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addDoctor = async (req, res) => {
    
  try {
    const { name, department, specialization, contact } = req.body;

    if (!name || !department || !specialization || !contact) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newDoctor = await prisma.doctor.create({
      data: {
        name,
        department,
        specialization,
        contact,
      },
    });

    console.log("addDoctor");

   
    if(!newDoctor){
      return res.status(500).json({ message: "Doctor not created" }); 
    }

    return res.status(201).json({
      message: "Doctor created successfully",
      doctor: newDoctor,
    });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getDoctors = async (req, res) => {
  try {
    const doctors = await prisma.doctor.findMany();
    return res.status(200).json(doctors);
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

export const getDoctorById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "Doctor ID is required" });
    }
    const doctor = await prisma.doctor.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }
    return res.status(200).json(doctor);
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

export const updateDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "Doctor ID is required" });
    }

    const allowedFields = ["name", "department", "specialization", "contact"];
    const updateData = Object.fromEntries(
      Object.entries(req.body).filter(
        ([key, value]) => allowedFields.includes(key) && value !== undefined
      )
    );

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ message: "No fields provided for update" });
    }

    const doctor = await prisma.doctor.update({
      where: { id: parseInt(id) },
      data: updateData,
    });

    return res.status(200).json(doctor);
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

export const deleteDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    if (id) return res.status(500).json({ message: "Doctor ID is required" });
    await prisma.doctor.delete({
      where: {
        id: parseInt(id),
      },
    });
    return res.status(204).json({ message: "Doctor deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};
