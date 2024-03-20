/*
  Warnings:

  - You are about to drop the `title` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `title`;

-- CreateTable
CREATE TABLE `Qualification` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(200) NOT NULL,
    `institute_name` VARCHAR(200) NOT NULL,
    `session` VARCHAR(200) NOT NULL,
    `role` ENUM('Education', 'Work') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
