import prisma from "@/utils/prisma";

// Home page
export let hero_dataPromise = prisma.hero.findFirst({});
export const categoryPromise = prisma.Projects_category.findMany({});

// for masterlayout
export const socialPromise = prisma.Social_media.findFirst({});
export const web_infoPromise = prisma.Web_information.findFirst({});

// for blog page
export const allBlogPromise = prisma.blog.findMany({
  include: { profile: { select: { user_name: true, img: true } } },
});

// For all page's title and subtitle
export const sectionDetailsPromise = prisma.section_details.findFirst({});

// for about page
export const aboutPromise = prisma.About_me.findFirst({});

// blog details
export const commentsDataPromise = (id) => {
  return prisma.comment.findMany({
    where: { blogId: parseInt(id) },
  });
};
export const blogPromise = (id) => {
  return prisma.blog.findUnique({
    where: { id: parseInt(id) },
    include: {
      profile: {
        select: {
          user_name: true,
          age: true,
          mobile: true,
          img: true,
          email: true,
        },
      },
    },
  });
};

// project page
export const projectsFetch = prisma.projects.findMany({
  orderBy: { id: "desc" },
  include: {
    for_developer: true,
    key_feature: true,
    profile: { select: { user_name: true, img: true } },
  },
});

export const sliderProjectsFetch = prisma.projects.findMany({
  where: { type: "slider" },
  orderBy: { id: "desc" },
  take: 5,
});

// Project Details
export const projectDetailsPromise = async (id) => {
  return prisma.projects.findUnique({
    where: { id: parseInt(id) },
    include: {
      profile: { select: { user_name: true, img: true } },
      key_feature: true,
      for_developer: true,
    },
  });
};

export const relatedProjectPromise = async (id) => {
  return prisma.projects.findMany({
    where: { categoryId: id },
  });
};

// services page
export const servicePromise = prisma.services.findMany({
  include: { service_items: true },
});

// Skills page
export const skillPromise = prisma.skills.findMany({
  include: { skill_items: true },
});
