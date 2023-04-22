/*
  Warnings:

  - The `rentDuration` column on the `PropertyData` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "PropertyData" DROP COLUMN "rentDuration",
ADD COLUMN     "rentDuration" TEXT;
