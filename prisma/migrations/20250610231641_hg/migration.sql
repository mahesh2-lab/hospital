/*
  Warnings:

  - You are about to drop the `DrugChart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DrugChartDate` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "DrugChart";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "DrugChartDate";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "medication_trackers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "patientId" INTEGER NOT NULL,
    "name" TEXT DEFAULT 'My Medication Tracker',
    "columnDates" JSONB NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "medications" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "trackerId" TEXT NOT NULL,
    CONSTRAINT "medications_trackerId_fkey" FOREIGN KEY ("trackerId") REFERENCES "medication_trackers" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "schedules" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "column" INTEGER NOT NULL,
    "morning" BOOLEAN NOT NULL DEFAULT false,
    "afternoon" BOOLEAN NOT NULL DEFAULT false,
    "evening" BOOLEAN NOT NULL DEFAULT false,
    "medicationId" TEXT NOT NULL,
    CONSTRAINT "schedules_medicationId_fkey" FOREIGN KEY ("medicationId") REFERENCES "medications" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "schedules_medicationId_column_key" ON "schedules"("medicationId", "column");
