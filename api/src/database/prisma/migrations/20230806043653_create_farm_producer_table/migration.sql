-- CreateEnum
CREATE TYPE "PlantedCropsEnum" AS ENUM ('SOYBEAN', 'CORN', 'COTTON', 'COFFEE', 'SUGAR_CANE');

-- CreateTable
CREATE TABLE "farm_producer" (
    "id" TEXT NOT NULL,
    "cpfOrCnpj" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "farmName" VARCHAR(255) NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "state" VARCHAR(10) NOT NULL,
    "arableAreaInHectares" DOUBLE PRECISION NOT NULL,
    "vegetationAreaInHectares" DOUBLE PRECISION NOT NULL,
    "totalAreaInHectares" DOUBLE PRECISION NOT NULL,
    "plantedCrops" "PlantedCropsEnum"[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "farm_producer_pkey" PRIMARY KEY ("id")
);
