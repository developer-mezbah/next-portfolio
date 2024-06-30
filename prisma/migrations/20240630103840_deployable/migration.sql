-- CreateTable
CREATE TABLE `hero` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title1` VARCHAR(50) NULL,
    `title2` VARCHAR(50) NULL,
    `title3` VARCHAR(50) NULL,
    `title4` VARCHAR(50) NULL,
    `subtitle` VARCHAR(200) NOT NULL,
    `description` VARCHAR(500) NOT NULL,
    `img` LONGTEXT NOT NULL,
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
    `img_url` LONGTEXT NOT NULL,
    `public_id` VARCHAR(100) NOT NULL,
    `cat_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `qualification_page` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NULL,
    `sub_title` VARCHAR(100) NULL,

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
CREATE TABLE `About_me_page` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NULL,
    `sub_title` VARCHAR(100) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `About_me` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `content` LONGTEXT NOT NULL,
    `expericed` VARCHAR(50) NOT NULL,
    `projects` VARCHAR(50) NOT NULL,
    `works` VARCHAR(50) NOT NULL,
    `img` LONGTEXT NOT NULL,
    `cv` VARCHAR(500) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Testimonial_page` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NULL,
    `sub_title` VARCHAR(100) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Testimonial` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `title` VARCHAR(50) NOT NULL,
    `description` VARCHAR(600) NOT NULL,
    `rating` DOUBLE NOT NULL,
    `img` LONGTEXT NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Discount_project` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(150) NOT NULL,
    `sub_title` VARCHAR(500) NOT NULL,
    `img` LONGTEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Social_media` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `github` VARCHAR(800) NOT NULL,
    `linkedin` VARCHAR(800) NOT NULL,
    `facebook` VARCHAR(800) NOT NULL,
    `medium` VARCHAR(800) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Profile` (
    `id` INTEGER NOT NULL,
    `user_name` VARCHAR(100) NULL,
    `age` VARCHAR(50) NULL,
    `mobile` VARCHAR(50) NULL,
    `img` LONGTEXT NULL,
    `email` VARCHAR(100) NULL,
    `password` VARCHAR(50) NULL,
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updateAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `Profile_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Blog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(400) NULL,
    `keywords` VARCHAR(400) NULL,
    `short_des` VARCHAR(400) NULL,
    `long_des` LONGTEXT NULL,
    `img` LONGTEXT NULL,
    `highLight` VARCHAR(200) NULL,
    `profileId` INTEGER NOT NULL,
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updateAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `comment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(400) NULL,
    `email` VARCHAR(400) NULL,
    `comment` LONGTEXT NULL,
    `approve` BOOLEAN NULL DEFAULT true,
    `img` LONGTEXT NULL,
    `blogId` INTEGER NOT NULL,
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updateAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Projects` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `banner_img` LONGTEXT NOT NULL,
    `keywords` LONGTEXT NULL,
    `long_img` LONGTEXT NOT NULL,
    `price` VARCHAR(100) NULL,
    `code_url` LONGTEXT NULL,
    `preview_url` LONGTEXT NULL,
    `title` VARCHAR(600) NOT NULL,
    `description` LONGTEXT NOT NULL,
    `type` VARCHAR(100) NULL,
    `profileId` INTEGER NOT NULL,
    `categoryId` INTEGER NULL,
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updateAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Projects_category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cat_name` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `For_developers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(400) NOT NULL,
    `projectId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Key_features` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(400) NOT NULL,
    `projectId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Skills` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(500) NOT NULL,
    `subTitle` VARCHAR(800) NOT NULL,
    `svg` LONGTEXT NOT NULL,
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updateAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Skill_items` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(1000) NOT NULL,
    `percent` VARCHAR(50) NOT NULL,
    `skillId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Services` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(500) NOT NULL,
    `svg` LONGTEXT NOT NULL,
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updateAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Service_items` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(1000) NOT NULL,
    `serviceId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Section_details` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `qualification_title` VARCHAR(500) NOT NULL,
    `qualification_subtitle` VARCHAR(800) NOT NULL,
    `testimonial_title` VARCHAR(500) NOT NULL,
    `testimonial_subtitle` VARCHAR(800) NOT NULL,
    `about_me_title` VARCHAR(500) NOT NULL,
    `about_me_subtitle` VARCHAR(800) NOT NULL,
    `skills_title` VARCHAR(500) NOT NULL,
    `skills_subtitle` VARCHAR(800) NOT NULL,
    `services_title` VARCHAR(500) NOT NULL,
    `services_subtitle` VARCHAR(800) NOT NULL,
    `popular_projects_title` VARCHAR(500) NOT NULL,
    `popular_projects_subtitle` VARCHAR(800) NOT NULL,
    `all_projects_title` VARCHAR(500) NOT NULL,
    `all_projects_subtitle` VARCHAR(800) NOT NULL,
    `contact_me_title` VARCHAR(500) NOT NULL,
    `contact_me_subtitle` VARCHAR(800) NOT NULL,
    `blogs_title` VARCHAR(500) NOT NULL,
    `blogs_subtitle` VARCHAR(800) NOT NULL,
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updateAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `visitor_data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ip` VARCHAR(400) NULL,
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updateAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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

-- AddForeignKey
ALTER TABLE `Gallery_img` ADD CONSTRAINT `Gallery_img_cat_id_fkey` FOREIGN KEY (`cat_id`) REFERENCES `Gallery`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Blog` ADD CONSTRAINT `Blog_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `Profile`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comment` ADD CONSTRAINT `comment_blogId_fkey` FOREIGN KEY (`blogId`) REFERENCES `Blog`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Projects` ADD CONSTRAINT `Projects_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `Profile`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Projects` ADD CONSTRAINT `Projects_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Projects_category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `For_developers` ADD CONSTRAINT `For_developers_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Projects`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Key_features` ADD CONSTRAINT `Key_features_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Projects`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Skill_items` ADD CONSTRAINT `Skill_items_skillId_fkey` FOREIGN KEY (`skillId`) REFERENCES `Skills`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Service_items` ADD CONSTRAINT `Service_items_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `Services`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
