-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Patient" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mhrNo" TEXT NOT NULL,
    "uidNo" TEXT NOT NULL,
    "ipdNo" TEXT NOT NULL,
    "wardOrIcu" TEXT NOT NULL,
    "bedRoomNo" TEXT NOT NULL,
    "patientName" TEXT,
    "fatherName" TEXT,
    "aadharNo" TEXT,
    "age" INTEGER,
    "sex" TEXT NOT NULL,
    "weight" TEXT,
    "address" TEXT,
    "occupation" TEXT,
    "regNo" TEXT,
    "dateOfAdmission" DATETIME,
    "dateOfDischarge" DATETIME,
    "dateOfOperation" TEXT,
    "surgeryPerformByDoctor" TEXT,
    "anesthetistDoctor" TEXT,
    "referringDoctor" TEXT,
    "mlcNoPoliceStation" TEXT,
    "consultantName" TEXT,
    "emergencyContact" TEXT,
    "performByDoctor" TEXT,
    "doctorIncharge" TEXT,
    "broughtBy" TEXT,
    "statusOfDischarge" TEXT,
    "dischargeSummary" TEXT,
    "icdCode" TEXT,
    "provisionalDiagnosis" TEXT,
    "finalDiagnosis" TEXT
);
INSERT INTO "new_Patient" ("aadharNo", "address", "age", "anesthetistDoctor", "bedRoomNo", "broughtBy", "consultantName", "dateOfAdmission", "dateOfDischarge", "dateOfOperation", "dischargeSummary", "doctorIncharge", "emergencyContact", "fatherName", "finalDiagnosis", "icdCode", "id", "ipdNo", "mhrNo", "mlcNoPoliceStation", "occupation", "patientName", "performByDoctor", "provisionalDiagnosis", "referringDoctor", "regNo", "sex", "statusOfDischarge", "surgeryPerformByDoctor", "uidNo", "wardOrIcu", "weight") SELECT "aadharNo", "address", "age", "anesthetistDoctor", "bedRoomNo", "broughtBy", "consultantName", "dateOfAdmission", "dateOfDischarge", "dateOfOperation", "dischargeSummary", "doctorIncharge", "emergencyContact", "fatherName", "finalDiagnosis", "icdCode", "id", "ipdNo", "mhrNo", "mlcNoPoliceStation", "occupation", "patientName", "performByDoctor", "provisionalDiagnosis", "referringDoctor", "regNo", "sex", "statusOfDischarge", "surgeryPerformByDoctor", "uidNo", "wardOrIcu", "weight" FROM "Patient";
DROP TABLE "Patient";
ALTER TABLE "new_Patient" RENAME TO "Patient";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
