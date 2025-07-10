import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const validateColumnDates = (columnDates) => {
  return Array.isArray(columnDates) && columnDates.length === 7;
};

const validateMedications = (medications) => {
  return Array.isArray(medications) && medications.every(med => 
    med.medicationName && 
    typeof med.medicationName === 'string' &&
    Array.isArray(med.schedules) &&
    med.schedules.length === 7
  );
};

export const getMedicationTracker = async (req, res) => {
  try {
    const { trackerId } = req.params;
    const { patientId } = req.query;
    const patientIdNum = patientId ? Number(patientId) : undefined; 
    
    // Input validation
    if (!trackerId && !patientIdNum) {
      return res.status(400).json({ 
        error: 'Either trackerId or patientId must be provided' 
      });
    }
    
    let whereClause = {};
    
    if (trackerId) {
      whereClause.id = trackerId;
    } else if (patientIdNum) {
      whereClause.patientId = patientIdNum;
    }
    
    const tracker = await prisma.medicationTracker.findFirst({
      where: whereClause,
      include: {
        medications: {
          include: {
            schedules: {
              orderBy: { column: 'asc' }
            }
          },
          orderBy: { createdAt: 'asc' }
        }
      },
      orderBy: { updatedAt: 'desc' }
    });
    
    if (!tracker) {
      return res.status(404).json({
        error: 'Medication tracker not found',
        data: {
          columnDates: Array(7).fill(''),
          medications: []
        }
      });
    } 
    
    const formattedMedications = tracker.medications.map(med => ({
      id: med.id,
      medicationName: med.name,
      schedules: Array.from({ length: 7 }, (_, index) => {
        const schedule = med.schedules.find(s => s.column === index);
        return schedule ? {
          morning: Boolean(schedule.morning),
          afternoon: Boolean(schedule.afternoon),
          evening: Boolean(schedule.evening)
        } : {
          morning: false,
          afternoon: false,
          evening: false
        };
      })
    }));
    
    res.json({
      success: true,
      data: {
        id: tracker.id,
        name: tracker.name,
        columnDates: tracker.columnDates,
        medications: formattedMedications,
        createdAt: tracker.createdAt,
        updatedAt: tracker.updatedAt
      }
    });
    
  } catch (error) {
    console.error('Error fetching medication tracker:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to fetch medication tracker',
      message: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

export const saveMedicationTracker = async (req, res) => {
  try {
    const { id, columnDates, medications, patientId, name } = req.body;
    
    // Enhanced validation
    if (!validateColumnDates(columnDates)) {
      return res.status(400).json({ 
        success: false,
        error: 'Column dates must be an array of 7 dates' 
      });
    }
    
    if (!validateMedications(medications)) {
      return res.status(400).json({ 
        success: false,
        error: 'Invalid medications format' 
      });
    }
    
    if (!id || id.startsWith('temp-')) {
      if (!patientId) {
        return res.status(400).json({ 
          success: false,
          error: 'User ID is required for new trackers' 
        });
      }
    }
    
    const result = await prisma.$transaction(async (tx) => {
      let tracker;
      
      if (id && !id.startsWith('temp-')) {
        // Update existing tracker
        tracker = await tx.medicationTracker.update({
          where: { id },
          data: {
            columnDates,
            name: name ,
            updatedAt: new Date()
          }
        });
        
        await tx.medication.deleteMany({
          where: { trackerId: id }
        });
      } else {
        // Create new tracker
        tracker = await tx.medicationTracker.create({
          data: {
            patientId,
            columnDates,
            name: name 
          }
        });
      }
      
      const medicationPromises = medications
        .filter(med => med.medicationName && med.medicationName.trim() !== '')
        .map(async (med) => {
          const medication = await tx.medication.create({
            data: {
              name: med.medicationName.trim(),
              trackerId: tracker.id
            }
          });
          
          // Create schedules for each column
          const schedulePromises = Array.from({ length: 7 }, (_, i) => {
            const schedule = med.schedules[i] || { 
              morning: false, 
              afternoon: false, 
              evening: false 
            };
            
            return tx.schedule.create({
              data: {
                column: i,
                morning: Boolean(schedule.morning),
                afternoon: Boolean(schedule.afternoon),
                evening: Boolean(schedule.evening),
                medicationId: medication.id
              }
            });
          });
          
          await Promise.all(schedulePromises);
          return medication;
        });
      
      await Promise.all(medicationPromises);
      return tracker;
    });
    
    res.status(201).json({ 
      success: true, 
      message: 'Medication tracker saved successfully',
      data: {
        trackerId: result.id,
        name: result.name
      }
    });
    
  } catch (error) {
    console.error('Error saving medication tracker:', error);
    
    if (error.code === 'P2002') {
      return res.status(409).json({ 
        success: false,
        error: 'A tracker with this name already exists' 
      });
    }
    
    if (error.code === 'P2025') {
      return res.status(404).json({ 
        success: false,
        error: 'Tracker not found' 
      });
    }
    
    res.status(500).json({ 
      success: false,
      error: 'Failed to save medication tracker',
      message: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

export const deleteMedicationTracker = async (req, res) => {
  try {
    const { trackerId } = req.params;
    
    if (!trackerId) {
      return res.status(400).json({ 
        success: false,
        error: 'Tracker ID is required' 
      });
    }
    
    const deletedTracker = await prisma.medicationTracker.delete({
      where: { id: trackerId }
    });
    
    res.json({ 
      success: true, 
      message: 'Medication tracker deleted successfully',
      data: {
        deletedTrackerId: deletedTracker.id
      }
    });
    
  } catch (error) {
    console.error('Error deleting medication tracker:', error);
    
    if (error.code === 'P2025') {
      return res.status(404).json({ 
        success: false,
        error: 'Tracker not found' 
      });
    }
    
    res.status(500).json({ 
      success: false,
      error: 'Failed to delete medication tracker',
      message: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

export const getUserMedicationTrackers = async (req, res) => {
  try {
    const { patientId } = req.params;
    const { page = 1, limit = 10 } = req.query;
    
    if (!patientId) {
      return res.status(400).json({ 
        success: false,
        error: 'User ID is required' 
      });
    }
    
    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    const [trackers, totalCount] = await Promise.all([
      prisma.medicationTracker.findMany({
        where: { patientId: Number(patientId) },
        select: {
          id: true,
          name: true,
          createdAt: true,
          updatedAt: true,
          medications: true,
          _count: {
            select: { medications: true }
          }
        },
        orderBy: { updatedAt: 'desc' },
        skip,
        take: parseInt(limit)
      }),
      prisma.medicationTracker.count({
        where: { patientId: Number(patientId) }
      })
    ]);
    
    res.json({
      success: true,
      data: {
        trackers,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total: totalCount,
          totalPages: Math.ceil(totalCount / parseInt(limit))
        }
      }
    });
    
  } catch (error) {
    console.error('Error fetching user trackers:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to fetch medication trackers',
      message: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

export const updateMedication = async (req, res) => {
  try {
    const { medicationId } = req.params;
    const { medicationName, schedules } = req.body;
    
    if (!medicationId || !medicationName || !schedules) {
      return res.status(400).json({ 
        success: false,
        error: 'Medication ID, name, and schedules are required' 
      });
    }
    
    if (!Array.isArray(schedules) || schedules.length !== 7) {
      return res.status(400).json({ 
        success: false,
        error: 'Schedules must be an array of 7 items' 
      });
    }
    
    await prisma.$transaction(async (tx) => {
      // Update medication name
      await tx.medication.update({
        where: { id: medicationId },
        data: { 
          name: medicationName.trim(),
          updatedAt: new Date()
        }
      });
      
      // Update schedules
      const schedulePromises = schedules.map((schedule, i) => 
        tx.schedule.upsert({
          where: {
            medicationId_column: {
              medicationId,
              column: i
            }
          },
          update: {
            morning: Boolean(schedule.morning),
            afternoon: Boolean(schedule.afternoon),
            evening: Boolean(schedule.evening)
          },
          create: {
            column: i,
            morning: Boolean(schedule.morning),
            afternoon: Boolean(schedule.afternoon),
            evening: Boolean(schedule.evening),
            medicationId
          }
        })
      );
      
      await Promise.all(schedulePromises);
    });
    
    res.json({ 
      success: true, 
      message: 'Medication updated successfully',
      data: {
        medicationId
      }
    });
    
  } catch (error) {
    console.error('Error updating medication:', error);
    
    if (error.code === 'P2025') {
      return res.status(404).json({ 
        success: false,
        error: 'Medication not found' 
      });
    }
    
    res.status(500).json({ 
      success: false,
      error: 'Failed to update medication',
      message: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

export const deleteMedication = async (req, res) => {
  const medicationId = req.params.medicationId || req.params.id

  if (!medicationId) {
    return res.status(400).json({
      success: false,
      error: 'Medication ID is required'
    })
  }

  try {
    const deleted = await prisma.medication.delete({
      where: { id: medicationId }
    })
    res.json({
      success: true,
      message: 'Medication deleted successfully',
      data: { deletedMedicationId: deleted.id }
    })
  } catch (error) {
    console.error('Error deleting medication:', error)
    if (error.code === 'P2025') {
      return res.status(404).json({
        success: false,
        error: 'Medication not found'
      })
    }
    res.status(500).json({
      success: false,
      error: 'Failed to delete medication',
      message:
        process.env.NODE_ENV === 'development'
          ? error.message
          : undefined
    })
  }
}

export const cloneMedicationTracker = async (req, res) => {
  try {
    const { trackerId } = req.params;
    const { patientId, name } = req.body;
    
    if (!trackerId || !patientId) {
      return res.status(400).json({ 
        success: false,
        error: 'Tracker ID and User ID are required' 
      });
    }
    
    const originalTracker = await prisma.medicationTracker.findUnique({
      where: { id: trackerId },
      include: {
        medications: {
          include: {
            schedules: true
          }
        }
      }
    });
    
    if (!originalTracker) {
      return res.status(404).json({ 
        success: false,
        error: 'Original tracker not found' 
      });
    }
    
    const clonedTracker = await prisma.$transaction(async (tx) => {
      const newTracker = await tx.medicationTracker.create({
        data: {
          patientId,
          name: name || `${originalTracker.name} (Copy)`,
          columnDates: originalTracker.columnDates
        }
      });
      
      for (const med of originalTracker.medications) {
        const newMedication = await tx.medication.create({
          data: {
            name: med.name,
            trackerId: newTracker.id
          }
        });
        
        const schedulePromises = med.schedules.map(schedule =>
          tx.schedule.create({
            data: {
              column: schedule.column,
              morning: schedule.morning,
              afternoon: schedule.afternoon,
              evening: schedule.evening,
              medicationId: newMedication.id
            }
          })
        );
        
        await Promise.all(schedulePromises);
      }
      
      return newTracker;
    });
    
    res.status(201).json({
      success: true,
      message: 'Medication tracker cloned successfully',
      data: {
        trackerId: clonedTracker.id,
        name: clonedTracker.name
      }
    });
    
  } catch (error) {
    console.error('Error cloning medication tracker:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to clone medication tracker',
      message: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

