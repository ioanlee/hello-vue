-- CreateTable
CREATE TABLE "categories" (
    "c_id" SERIAL NOT NULL,
    "c_name" VARCHAR(255) NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("c_id")
);

-- CreateTable
CREATE TABLE "ingredients" (
    "i_id" SERIAL NOT NULL,
    "i_name" VARCHAR(255) NOT NULL,

    CONSTRAINT "ingredients_pkey" PRIMARY KEY ("i_id")
);

-- CreateTable
CREATE TABLE "dishes" (
    "d_id" SERIAL NOT NULL,
    "d_name" VARCHAR(255) NOT NULL,
    "d_image" VARCHAR(255) NOT NULL,
    "d_category" INTEGER NOT NULL,
    "d_ingredients" INTEGER[],

    CONSTRAINT "dishes_pkey" PRIMARY KEY ("d_id")
);

-- CreateTable
CREATE TABLE "dish_to_ingredient" (
    "id" SERIAL NOT NULL,
    "dish_id" INTEGER NOT NULL,
    "ingredient_id" INTEGER NOT NULL,

    CONSTRAINT "dish_to_ingredient_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "categories_c_name_key" ON "categories"("c_name");

-- CreateIndex
CREATE UNIQUE INDEX "ingredients_i_name_key" ON "ingredients"("i_name");

-- CreateIndex
CREATE UNIQUE INDEX "dishes_d_name_key" ON "dishes"("d_name");
