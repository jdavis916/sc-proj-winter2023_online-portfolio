/*
  Warnings:

  - Added the required column `name` to the `Contacts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `contacts` ADD COLUMN `name` VARCHAR(191) NOT NULL;
