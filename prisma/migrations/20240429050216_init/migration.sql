/*
  Warnings:

  - You are about to drop the `requestForm` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "requestForm" DROP CONSTRAINT "requestForm_userId_fkey";

-- DropTable
DROP TABLE "requestForm";

-- CreateTable
CREATE TABLE "RequestForm" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RequestForm_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RequestForm" ADD CONSTRAINT "RequestForm_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
