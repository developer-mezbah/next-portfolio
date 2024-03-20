/*
  Warnings:

  - You are about to alter the column `title` on the `qualification` table. The data in that column could be lost. The data in that column will be cast from `VarChar(200)` to `VarChar(100)`.
  - You are about to alter the column `institute_name` on the `qualification` table. The data in that column could be lost. The data in that column will be cast from `VarChar(200)` to `VarChar(100)`.
  - You are about to alter the column `session` on the `qualification` table. The data in that column could be lost. The data in that column will be cast from `VarChar(200)` to `VarChar(50)`.

*/
-- AlterTable
ALTER TABLE `qualification` MODIFY `title` VARCHAR(100) NOT NULL,
    MODIFY `institute_name` VARCHAR(100) NOT NULL,
    MODIFY `session` VARCHAR(50) NOT NULL;

-- CreateTable
CREATE TABLE `Marquee` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `reverse_title` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
