-- CreateTable
CREATE TABLE `hero` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title1` VARCHAR(50) NULL,
    `title2` VARCHAR(50) NULL,
    `title3` VARCHAR(50) NULL,
    `title4` VARCHAR(50) NULL,
    `subtitle` VARCHAR(200) NOT NULL,
    `description` VARCHAR(500) NOT NULL,
    `img` VARCHAR(300) NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Gallery` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cat_name` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Gallery_img` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `img_url` VARCHAR(400) NOT NULL,
    `public_id` VARCHAR(100) NOT NULL,
    `cat_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Qualification` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `institute_name` VARCHAR(100) NOT NULL,
    `session` VARCHAR(50) NOT NULL,
    `role` ENUM('Education', 'Work') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Marquee` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `reverse_title` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `About_me` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `content` VARCHAR(700) NOT NULL,
    `expericed` VARCHAR(50) NOT NULL,
    `projects` VARCHAR(50) NOT NULL,
    `works` VARCHAR(50) NOT NULL,
    `img` VARCHAR(500) NOT NULL,
    `cv` VARCHAR(500) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Testimonial` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `title` VARCHAR(50) NOT NULL,
    `description` VARCHAR(600) NOT NULL,
    `rating` DOUBLE NOT NULL,
    `img` VARCHAR(500) NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Gallery_img` ADD CONSTRAINT `Gallery_img_cat_id_fkey` FOREIGN KEY (`cat_id`) REFERENCES `Gallery`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
