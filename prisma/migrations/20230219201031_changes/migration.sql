/*
  Warnings:

  - A unique constraint covering the columns `[propertyId]` on the table `PropertyData` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `propertyId` to the `PropertyData` table without a default value. This is not possible if the table is not empty.
  - Made the column `createdAt` on table `PropertyData` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `PropertyData` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `moveIn` to the `Tenant` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "RentDuration" AS ENUM ('night', 'month');

-- AlterTable
ALTER TABLE "PropertyData" ADD COLUMN     "propertyId" TEXT NOT NULL,
ADD COLUMN     "rent" INTEGER,
ADD COLUMN     "rentDuration" "RentDuration",
ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "Tenant" ADD COLUMN     "moveIn" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "PropertyData_propertyId_key" ON "PropertyData"("propertyId");

-- AddForeignKey
ALTER TABLE "PropertyData" ADD CONSTRAINT "PropertyData_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
