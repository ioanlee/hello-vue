/*
  Warnings:

  - You are about to drop the column `d_category` on the `dishes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "dishes" DROP COLUMN "d_category";

-- CreateTable
CREATE TABLE "ingredients" (
    "i_id" SERIAL NOT NULL,
    "i_name" VARCHAR(255) NOT NULL,

    CONSTRAINT "ingredients_pkey" PRIMARY KEY ("i_id")
);

-- CreateTable
CREATE TABLE "dish_to_ingredient" (
    "id" SERIAL NOT NULL,
    "dish_id" INTEGER NOT NULL,
    "ingredient_id" INTEGER NOT NULL,

    CONSTRAINT "dish_to_ingredient_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ingredients_i_name_key" ON "ingredients"("i_name");

-- AddForeignKey
ALTER TABLE "dishes" ADD CONSTRAINT "dishes_d_category_id_fkey" FOREIGN KEY ("d_category_id") REFERENCES "categories"("c_id") ON DELETE SET NULL ON UPDATE CASCADE;
