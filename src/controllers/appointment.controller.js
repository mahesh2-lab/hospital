import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const bookAppointment = async (req, res) => {
  try {
    const { patientId, doctorId, date } = req.body;

    if (!patientId || !doctorId || !date) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const appointment = await prisma.appointment.create({
      data: {
        patientId,
        doctorId,
        date: new Date(date),
        status: "scheduled",
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

export const getAppointments = async (req, res) => {
  try {
    const appointments = await prisma.appointment.findMany({
      include: {
        patient: true,
        doctor: true,
      },
    });

    if (!appointments || appointments.length === 0) {
      return res.status(404).json({ error: "No appointments found" });
    }

    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({
      error: "Failed to retrieve appointments",
      message: error.message,
    });
  }
};

export const getAppointmentById = async (req, res) => {
  const { id } = req.params;

  try {
    const appointment = await prisma.appointment.findUnique({
      where: { id: parseInt(id) },
      include: {
        patient: true,
        doctor: true,
      },
    });

    if (!appointment) {
      return res.status(404).json({ error: "Appointment not found" });
    }

    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({
      error: "Failed to retrieve appointment",
      message: error.message,
    });
  }
};

export const getAppointmentsByPatientId = async (req, res) => {
  const { patientId } = req.params;

  try {
    const appointments = await prisma.appointment.findMany({
      where: { patientId: parseInt(patientId) },
      include: {
        doctor: true,
      },
    });

    if (!appointments || appointments.length === 0) {
      return res
        .status(404)
        .json({ error: "No appointments found for this patient" });
    }

    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({
      error: "Failed to retrieve appointments",
      message: error.message,
    });
  }
};

export const getAppointmentsByDoctorId = async (req, res) => {
  const { doctorId } = req.params;

  try {
    const appointments = await prisma.appointment.findMany({
      where: { doctorId: parseInt(doctorId) },
      include: {
        patient: true,
      },
    });

    if (!appointments || appointments.length === 0) {
      return res
        .status(404)
        .json({ error: "No appointments found for this doctor" });
    }

    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({
      error: "Failed to retrieve appointments",
      message: error.message,
    });
  }
};

export const updateAppointment = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const appointment = await prisma.appointment.update({
      where: { id: parseInt(id) },
      data: { status },
    });

    if (!appointment) {
      return res.status(404).json({ error: "Appointment not found" });
    }

    res.status(200).json({
      message: "Appointment updated successfully",
      appointment,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to update appointment", message: error.message });
  }
};

export const deleteAppointment = async (req, res) => {
  const { id } = req.params;

  try {
    const appointment = await prisma.appointment.delete({
      where: { id: parseInt(id) },
    });

    if (!appointment) {
      return res.status(404).json({ error: "Appointment not found" });
    }

    res.status(200).json({
      message: "Appointment deleted successfully",
      appointment,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to delete appointment", message: error.message });
  }
};

export const getAppointmentsByDate = async (req, res) => {
  const { date } = req.query;

  try {
    const appointments = await prisma.appointment.findMany({
      where: {
        date: {
          gte: new Date(date),
          lt: new Date(new Date(date).setDate(new Date(date).getDate() + 1)),
        },
      },
      include: {
        patient: true,
        doctor: true,
      },
    });

    if (!appointments || appointments.length === 0) {
      return res
        .status(404)
        .json({ error: "No appointments found for this date" });
    }

    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({
      error: "Failed to retrieve appointments",
      message: error.message,
    });
  }
};

export const getAppointmentsByStatus = async (req, res) => {
  const { status } = req.query;

  try {
    const appointments = await prisma.appointment.findMany({
      where: { status },
      include: {
        patient: true,
        doctor: true,
      },
    });

    if (!appointments || appointments.length === 0) {
      return res
        .status(404)
        .json({ error: "No appointments found with this status" });
    }

    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({
      error: "Failed to retrieve appointments",
      message: error.message,
    });
  }
};

export const getAppointmentsByPatientAndDoctor = async (req, res) => {
  const { patientId, doctorId } = req.params;

  console.log(
    `Fetching appointments for patientId: ${patientId} and doctorId: ${doctorId}`
  );

  const parsedPatientId = parseInt(patientId);
  const parsedDoctorId = parseInt(doctorId);

  if (isNaN(parsedPatientId)) {
    return res.status(400).json({ error: "Invalid or missing patientId" });
  }

  if (isNaN(parsedDoctorId)) {
    return res.status(400).json({ error: "Invalid or missing doctorId" });
  }

  try {
    const appointments = await prisma.appointment.findMany({
      where: {
        patientId: parsedPatientId,
        doctorId: parsedDoctorId,
      },
      include: {
        patient: true,
        doctor: true,
      },
    });

    if (!appointments || appointments.length === 0) {
      return res
        .status(404)
        .json({ error: "No appointments found for this patient and doctor" });
    }

    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({
      error: "Failed to retrieve appointments",
      message: error.message,
    });
  }
};