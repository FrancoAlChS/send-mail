-- CreateTable
CREATE TABLE "Driver" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "working_state" BOOLEAN NOT NULL,

    CONSTRAINT "Driver_pkey" PRIMARY KEY ("id")
);
