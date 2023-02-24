/*
  Warnings:

  - You are about to drop the column `propertyId` on the `InsurancePolicy` table. All the data in the column will be lost.
  - You are about to drop the column `occupied` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `ownership` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `propertyGroupId` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `rent` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `rentDuration` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `propertyId` on the `PropertyData` table. All the data in the column will be lost.
  - You are about to drop the column `propertyId` on the `Tenant` table. All the data in the column will be lost.
  - You are about to drop the `_PropertyGroupToUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PropertyToUser` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[ownerId]` on the table `Property` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ownerId` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Made the column `createdAt` on table `Property` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Property` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "InsurancePolicy" DROP CONSTRAINT "InsurancePolicy_propertyId_fkey";

-- DropForeignKey
ALTER TABLE "Property" DROP CONSTRAINT "Property_propertyGroupId_fkey";

-- DropForeignKey
ALTER TABLE "PropertyData" DROP CONSTRAINT "PropertyData_propertyId_fkey";

-- DropForeignKey
ALTER TABLE "Tenant" DROP CONSTRAINT "Tenant_propertyId_fkey";

-- DropForeignKey
ALTER TABLE "_PropertyGroupToUser" DROP CONSTRAINT "_PropertyGroupToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_PropertyGroupToUser" DROP CONSTRAINT "_PropertyGroupToUser_B_fkey";

-- DropForeignKey
ALTER TABLE "_PropertyToUser" DROP CONSTRAINT "_PropertyToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_PropertyToUser" DROP CONSTRAINT "_PropertyToUser_B_fkey";

-- DropIndex
DROP INDEX "Property_propertyGroupId_key";

-- DropIndex
DROP INDEX "PropertyData_propertyId_key";

-- DropIndex
DROP INDEX "Tenant_propertyId_key";

-- AlterTable
ALTER TABLE "InsurancePolicy" DROP COLUMN "propertyId";

-- AlterTable
ALTER TABLE "Property" DROP COLUMN "occupied",
DROP COLUMN "ownership",
DROP COLUMN "propertyGroupId",
DROP COLUMN "rent",
DROP COLUMN "rentDuration",
DROP COLUMN "value",
ADD COLUMN     "ownerId" TEXT NOT NULL,
ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "PropertyData" DROP COLUMN "propertyId";

-- AlterTable
ALTER TABLE "Tenant" DROP COLUMN "propertyId";

-- DropTable
DROP TABLE "_PropertyGroupToUser";

-- DropTable
DROP TABLE "_PropertyToUser";

-- CreateIndex
CREATE UNIQUE INDEX "Property_ownerId_key" ON "Property"("ownerId");

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
