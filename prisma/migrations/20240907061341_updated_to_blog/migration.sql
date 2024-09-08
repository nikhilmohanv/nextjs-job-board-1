/*
  Warnings:

  - You are about to drop the column `applicationEmail` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `applicationUrl` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `companyLogoUrl` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `companyName` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `locationType` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `salary` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `jobs` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "jobs" DROP COLUMN "applicationEmail",
DROP COLUMN "applicationUrl",
DROP COLUMN "companyLogoUrl",
DROP COLUMN "companyName",
DROP COLUMN "location",
DROP COLUMN "locationType",
DROP COLUMN "salary",
DROP COLUMN "type",
ADD COLUMN     "authorName" TEXT;
