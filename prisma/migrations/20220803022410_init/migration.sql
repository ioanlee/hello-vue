/*
  Warnings:

  - You are about to drop the column `d_category_id` on the `dishes` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "dishes" DROP CONSTRAINT "dishes_d_category_id_fkey";

-- AlterTable
ALTER TABLE "dishes" DROP COLUMN "d_category_id",
ADD COLUMN     "d_category" INTEGER;
