-- CreateTable
CREATE TABLE "Dish" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" INTEGER NOT NULL,

    CONSTRAINT "Dish_pkey" PRIMARY KEY ("id")
);
