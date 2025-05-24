import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const bookAppointment = async (req, res) => {
  try {
    const { patientId, doctorId, date, status } = req.body;

    if (!patientId || !doctorId || !date || !status) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const appointment = await prisma.appointment.create({
      data: {
        patientId,
        doctorId,
        date: new Date(date),
        status,
      },
    });

    if (!appointment) {
      return res.status(404).json({ error: "Appointment not created" });
    }

    res.status(201).json({
      message: "Appointment booked successfully",
      appointment,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to book appointment", message: error.message });
  }
};
