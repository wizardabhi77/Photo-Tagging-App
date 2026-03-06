-- CreateTable
CREATE TABLE "scoreboard" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "seconds" INTEGER NOT NULL,

    CONSTRAINT "scoreboard_pkey" PRIMARY KEY ("id")
);
