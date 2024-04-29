/*
  Warnings:

  - You are about to drop the column `firstname` on the `RequestForm` table. All the data in the column will be lost.
  - You are about to drop the column `lastname` on the `RequestForm` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `RequestForm` table. All the data in the column will be lost.
  - Added the required column `fromId` to the `RequestForm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toId` to the `RequestForm` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "RequestForm" DROP CONSTRAINT "RequestForm_userId_fkey";

-- AlterTable
ALTER TABLE "RequestForm" DROP COLUMN "firstname",
DROP COLUMN "lastname",
DROP COLUMN "userId",
ADD COLUMN     "approved" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "fromId" INTEGER NOT NULL,
ADD COLUMN     "toId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "RequestForm" ADD CONSTRAINT "RequestForm_fromId_fkey" FOREIGN KEY ("fromId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RequestForm" ADD CONSTRAINT "RequestForm_toId_fkey" FOREIGN KEY ("toId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
