-- AlterTable
ALTER TABLE `About_me` MODIFY `content` LONGTEXT NOT NULL;

-- CreateTable
CREATE TABLE `Web_information` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `logo` LONGTEXT NULL,
    `footer_logo` LONGTEXT NULL,
    `footer_description` LONGTEXT NULL,
    `phone` VARCHAR(100) NULL,
    `email` VARCHAR(200) NULL,
    `location` VARCHAR(200) NULL,
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updateAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
