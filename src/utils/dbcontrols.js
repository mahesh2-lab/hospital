import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function deleteOldCompletedAppointments() {
  const fourHoursAgo = new Date(Date.now() - 4 * 60 * 60 * 1000);

  try {
    const deletedAppointments = await prisma.appointment.deleteMany({
      where: {
        status: "complete",
        date: {
          lt: fourHoursAgo,
        },
      },
    });

    console.log(
      `Deleted ${deletedAppointments.count} old completed appointments.`
    );
  } catch (error) {
    console.error("Error deleting old completed appointments:", error);
  }
}
