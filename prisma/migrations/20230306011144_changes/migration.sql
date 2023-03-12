-- DropForeignKey
ALTER TABLE "PropertyData" DROP CONSTRAINT "PropertyData_propertyId_fkey";

-- AlterTable
ALTER TABLE "InsurancePolicy" ADD COLUMN     "propertyId" TEXT;

-- AlterTable
ALTER TABLE "PropertyData" ADD COLUMN     "garbageDay" TEXT,
ADD COLUMN     "landscapeDay" TEXT,
ADD COLUMN     "mailboxLocation" TEXT,
ADD COLUMN     "mailboxNumber" TEXT,
ADD COLUMN     "purchaseDate" INTEGER,
ADD COLUMN     "yearBuilt" INTEGER;

-- AddForeignKey
ALTER TABLE "PropertyData" ADD CONSTRAINT "PropertyData_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InsurancePolicy" ADD CONSTRAINT "InsurancePolicy_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;
