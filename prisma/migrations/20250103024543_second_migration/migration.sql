/*
  Warnings:

  - You are about to alter the column `name` on the `tenants` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(15)`.
  - You are about to alter the column `username` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(50)` to `VarChar(30)`.
  - You are about to alter the column `password` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(50)`.

*/
-- AlterTable
ALTER TABLE "tenants" ALTER COLUMN "name" SET DATA TYPE VARCHAR(15);

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "username" SET DATA TYPE VARCHAR(30),
ALTER COLUMN "password" SET DATA TYPE VARCHAR(50);
