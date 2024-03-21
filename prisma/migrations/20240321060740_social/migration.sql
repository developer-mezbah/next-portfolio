-- CreateTable
CREATE TABLE `Discount_project` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(50) NOT NULL,
    `sub_title` VARCHAR(50) NOT NULL,
    `img` VARCHAR(500) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Social_media` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `github` VARCHAR(400) NOT NULL,
    `linkedin` VARCHAR(400) NOT NULL,
    `facebook` VARCHAR(400) NOT NULL,
    `medium` VARCHAR(400) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
