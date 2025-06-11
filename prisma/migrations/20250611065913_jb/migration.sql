-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_medication_trackers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "patientId" INTEGER NOT NULL,
    "name" TEXT,
    "columnDates" JSONB NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_medication_trackers" ("columnDates", "createdAt", "id", "name", "patientId", "updatedAt") SELECT "columnDates", "createdAt", "id", "name", "patientId", "updatedAt" FROM "medication_trackers";
DROP TABLE "medication_trackers";
ALTER TABLE "new_medication_trackers" RENAME TO "medication_trackers";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
