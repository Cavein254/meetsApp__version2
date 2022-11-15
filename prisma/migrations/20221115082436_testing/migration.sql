/*
  Warnings:

  - You are about to drop the column `profession` on the `Profile` table. All the data in the column will be lost.
  - Made the column `email` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "profession",
ADD COLUMN     "experience" TEXT,
ADD COLUMN     "location" TEXT,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "profession_bio" TEXT,
ALTER COLUMN "slug" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "email" SET NOT NULL;
