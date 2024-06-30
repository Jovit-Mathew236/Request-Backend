/*
  Warnings:

  - Added the required column `title` to the `RequestForm` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RequestForm" ADD COLUMN     "title" TEXT NOT NULL;
