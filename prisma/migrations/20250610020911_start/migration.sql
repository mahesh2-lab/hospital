-- CreateTable
CREATE TABLE "DrugChart" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "patientId" INTEGER NOT NULL,
    "drugName" TEXT NOT NULL,
    CONSTRAINT "DrugChart_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DrugChartDate" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "drugChartId" INTEGER NOT NULL,
    "date" DATETIME NOT NULL,
    "morning" BOOLEAN NOT NULL DEFAULT false,
    "afternoon" BOOLEAN NOT NULL DEFAULT false,
    "evening" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "DrugChartDate_drugChartId_fkey" FOREIGN KEY ("drugChartId") REFERENCES "DrugChart" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
