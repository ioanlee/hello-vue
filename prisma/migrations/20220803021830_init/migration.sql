/*
  Warnings:

  - You are about to drop the column `d_category` on the `dishes` table. All the data in the column will be lost.
  - You are about to drop the column `d_ingredients` on the `dishes` table. All the data in the column will be lost.
  - You are about to drop the `dish_to_ingredient` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ingredients` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "dishes" DROP COLUMN "d_category",
DROP COLUMN "d_ingredients",
ADD COLUMN     "d_category_id" INTEGER,
ALTER COLUMN "d_image" DROP NOT NULL;

-- DropTable
DROP TABLE "dish_to_ingredient";

-- DropTable
DROP TABLE "ingredients";

-- AddForeignKey
ALTER TABLE "dishes" ADD CONSTRAINT "dishes_d_category_id_fkey" FOREIGN KEY ("d_category_id") REFERENCES "categories"("c_id") ON DELETE SET NULL ON UPDATE CASCADE;
