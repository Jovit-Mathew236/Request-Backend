-- CreateTable
CREATE TABLE "Web" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL DEFAULT 'NULL',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Web_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Web_email_key" ON "Web"("email");
