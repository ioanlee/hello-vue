-- DropForeignKey
ALTER TABLE "dishes" DROP CONSTRAINT "dishes_d_category_id_fkey";

-- AlterTable
ALTER TABLE "dishes" ADD COLUMN     "d_category" INTEGER;
