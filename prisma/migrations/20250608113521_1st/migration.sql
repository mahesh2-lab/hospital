-- CreateTable
CREATE TABLE "Patient" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mhrNo" TEXT NOT NULL DEFAULT (substr(hex(randomblob(3)),1,6)),
    "uidNo" TEXT NOT NULL,
    "ipdNo" TEXT NOT NULL,
    "wardOrIcu" TEXT NOT NULL,
    "bedRoomNo" TEXT NOT NULL,
    "patientName" TEXT,
    "aadharNo" TEXT NOT NULL,
    "occupation" TEXT,
    "mlcNoPoliceStation" TEXT,
    "address" TEXT,
    "consultantName" TEXT,
    "referringDoctor" TEXT,
    "emergencyContact" TEXT,
    "age" INTEGER NOT NULL,
    "sex" TEXT NOT NULL,
    "dateTimeAdmission" DATETIME,
    "dateTimeDischarge" DATETIME,
    "statusOfDischarge" TEXT NOT NULL,
    "icdCode" TEXT NOT NULL,
    "provisionalDiagnosis" TEXT,
    "finalDiagnosis" TEXT
);

-- CreateTable
CREATE TABLE "Doctor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "specialization" TEXT NOT NULL,
    "contact" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Appointment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "patientId" INTEGER NOT NULL,
    "doctorId" INTEGER NOT NULL,
    "date" DATETIME NOT NULL,
    "status" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "OPDRecord" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "patientId" INTEGER NOT NULL,
    "doctorId" INTEGER NOT NULL,
    "notes" TEXT NOT NULL,
    "prescription" TEXT NOT NULL,
    "date" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "IpdChart" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "chiefComplaints" TEXT NOT NULL,
    "hopi" TEXT NOT NULL,
    "patientId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Continuation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "ClinicalNote" TEXT NOT NULL,
    "treatment" TEXT NOT NULL,
    "patientId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Nursing" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "time" TEXT NOT NULL,
    "pulse" INTEGER NOT NULL,
    "bp" TEXT NOT NULL,
    "rr" INTEGER NOT NULL,
    "spo2" INTEGER NOT NULL,
    "temperature" REAL NOT NULL,
    "intake" TEXT,
    "output" TEXT,
    "patientId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
