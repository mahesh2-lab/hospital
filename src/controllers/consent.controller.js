import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Create a new consent form
export async function createConsentForm(req, res) {
  try {
    const {
      patientId,
      ralativeName,
      ralativeDateTime,
      witnessName,
      witnessDateTime,
      doctorName,
      doctorDateTime,
      interpreterName,
      interpreterDateTime
    } = req.body;

     if (!patientId) {
      return res.status(400).json({ message: 'Patient ID is required' });
    }

    const existingform = await prisma.consentForm.findFirst({
      where: {
        patientId: parseInt(patientId)
      }});


    if (existingform && existingform.id) {
      
      const newConsentForm = await prisma.consentForm.update({
      where: {
        id: existingform.id  // Use id instead of patientId since id is the unique identifier
      },
      data: {
        patientId: parseInt(patientId),
        ralativeName,
        ralativeDateTime,
        witnessName,
        witnessDateTime,
        doctorName,
        doctorDateTime,
        interpreterName,
        interpreterDateTime
      }
    });

    res.status(201).json(newConsentForm);
    return; // Add return to prevent execution of code below
    }
    
   

    const newConsentForm = await prisma.consentForm.create({
      data: {
        patientId: parseInt(patientId),
        ralativeName,
        ralativeDateTime,
        witnessName,
        witnessDateTime,
        doctorName,
        doctorDateTime,
        interpreterName,
        interpreterDateTime
      }
    });

    res.status(201).json(newConsentForm);
  } catch (error) {
    console.error('Error creating consent form:', error);
    res.status(500).json({ message: 'Failed to create consent form', error: error.message });
  }
}

// Get all consent forms
export async function getAllConsentForms(req, res) {
  try {
    const consentForms = await prisma.consentForm.findMany();
    res.status(200).json(consentForms);
  } catch (error) {
    console.error('Error fetching consent forms:', error);
    res.status(500).json({ message: 'Failed to fetch consent forms', error: error.message });
  }
}

// Get a single consent form by ID
export async function getConsentFormById(req, res) {
  try {
    const { id } = req.params;
    const consentForm = await prisma.consentForm.findUnique({
      where: {
        id: parseInt(id)
      }
    });

    if (!consentForm) {
      return res.status(404).json({ message: 'Consent form not found' });
    }

    res.status(200).json(consentForm);
  } catch (error) {
    console.error('Error fetching consent form:', error);
    res.status(500).json({ message: 'Failed to fetch consent form', error: error.message });
  }
}

// Get consent forms by patient ID
export async function getConsentFormsByPatientId(req, res) {
  try {
    const { patientId } = req.params;
    console.log("patintid ",patientId);

    const consentForms = await prisma.consentForm.findFirst({
      where: {
        patientId: parseInt(patientId)
      }
    });

    res.status(200).json(consentForms);
  } catch (error) {
    console.error('Error fetching consent forms for patient:', error);
    res.status(500).json({ message: 'Failed to fetch consent forms for patient', error: error.message });
  }
}

// Update a consent form
export async function updateConsentForm(req, res) {
  try {
    const { id } = req.params;
    const {
      patientId,
      ralativeName,
      ralativeDateTime,
      witnessName,
      witnessDateTime,
      doctorName,
      doctorDateTime,
      interpreterName,
      interpreterDateTime
    } = req.body;

    // Check if the consent form exists
    const existingConsentForm = await prisma.consentForm.findUnique({
      where: {
        id: parseInt(id)
      }
    });

    if (!existingConsentForm) {
      return res.status(404).json({ message: 'Consent form not found' });
    }

    // Update the consent form
    const updatedConsentForm = await prisma.consentForm.update({
      where: {
        id: parseInt(id)
      },
      data: {
        patientId: patientId !== undefined ? patientId : existingConsentForm.patientId,
        ralativeName,
        ralativeDateTime,
        witnessName,
        witnessDateTime,
        doctorName,
        doctorDateTime,
        interpreterName,
        interpreterDateTime
      }
    });

    res.status(200).json(updatedConsentForm);
  } catch (error) {
    console.error('Error updating consent form:', error);
    res.status(500).json({ message: 'Failed to update consent form', error: error.message });
  }
}

// Delete a consent form
export async function deleteConsentForm(req, res) {
  try {
    const { id } = req.params;

    // Check if the consent form exists
    const existingConsentForm = await prisma.consentForm.findUnique({
      where: {
        id: parseInt(id)
      }
    });

    if (!existingConsentForm) {
      return res.status(404).json({ message: 'Consent form not found' });
    }

    // Delete the consent form
    await prisma.consentForm.delete({
      where: {
        id: parseInt(id)
      }
    });

    res.status(200).json({ message: 'Consent form deleted successfully' });
  } catch (error) {
    console.error('Error deleting consent form:', error);
    res.status(500).json({ message: 'Failed to delete consent form', error: error.message });
  }
}
