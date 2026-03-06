-- CreateTable
CREATE TABLE "image" (
    "id" SERIAL NOT NULL,
    "source" TEXT NOT NULL,

    CONSTRAINT "image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "facecard" (
    "id" SERIAL NOT NULL,
    "top" INTEGER NOT NULL,
    "left" INTEGER NOT NULL,
    "size" INTEGER NOT NULL DEFAULT 100,
    "selection" TEXT NOT NULL,
    "imageId" INTEGER NOT NULL,

    CONSTRAINT "facecard_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "image_source_key" ON "image"("source");

-- CreateIndex
CREATE UNIQUE INDEX "facecard_selection_key" ON "facecard"("selection");

-- AddForeignKey
ALTER TABLE "facecard" ADD CONSTRAINT "facecard_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
