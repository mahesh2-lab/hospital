/*
  Warnings:

  - You are about to drop the column `aadharNo` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `consultantName` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `dateTimeAdmission` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `dateTimeDischarge` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `emergencyContact` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `mlcNoPoliceStation` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `referringDoctor` on the `Patient` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "IpdChart" ADD COLUMN "finalDiagnosis" TEXT;
ALTER TABLE "IpdChart" ADD COLUMN "localExamination" TEXT;
ALTER TABLE "IpdChart" ADD COLUMN "previousInvestigations" TEXT;
ALTER TABLE "IpdChart" ADD COLUMN "provisionalDiagnosis" TEXT;
ALTER TABLE "IpdChart" ADD COLUMN "systemicExamination" TEXT;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Patient" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mhrNo" TEXT NOT NULL DEFAULT (substr(hex(randomblob(3)),1,6)),
    "uidNo" TEXT NOT NULL,
    "ipdNo" TEXT NOT NULL,
    "wardOrIcu" TEXT NOT NULL,
    "bedRoomNo" TEXT NOT NULL,
    "patientName" TEXT,
    "fatherName" TEXT,
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
    "performByDoctor" TEXT,
    "doctorIncharge" TEXT,
    "broughtBy" TEXT,
    "statusOfDischarge" TEXT,
    "dischargeSummary" TEXT,
    "icdCode" TEXT,
    "provisionalDiagnosis" TEXT,
    "finalDiagnosis" TEXT
);
INSERT INTO "new_Patient" ("address", "age", "bedRoomNo", "finalDiagnosis", "icdCode", "id", "ipdNo", "mhrNo", "occupation", "patientName", "provisionalDiagnosis", "sex", "statusOfDischarge", "uidNo", "wardOrIcu") SELECT "address", "age", "bedRoomNo", "finalDiagnosis", "icdCode", "id", "ipdNo", "mhrNo", "occupation", "patientName", "provisionalDiagnosis", "sex", "statusOfDischarge", "uidNo", "wardOrIcu" FROM "Patient";
DROP TABLE "Patient";
ALTER TABLE "new_Patient" RENAME TO "Patient";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
