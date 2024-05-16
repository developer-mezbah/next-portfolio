import { FaHome, FaSignOutAlt } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { IoImagesOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdCastForEducation } from "react-icons/md";
import { TbBrandBlogger, TbSection } from "react-icons/tb";
import { VscFeedback } from "react-icons/vsc";
import { SiSkillshare } from "react-icons/si";
import { GrServices } from "react-icons/gr";

export const NavData = [
  {
    pageName: "main", // Not change able
    pageTitle: "Dashboards",
    icon: <LuLayoutDashboard />,
    subItems: [
      {
        name: "Home",
        url: "/dashboard",
      },
      {
        name: "Profile",
        url: "/dashboard/profile",
      },
    ],
  },
  {
    pageName: "pages",
    pageTitle: "Home",
    icon: <FaHome />,
    subItems: [
      {
        name: "Hero",
        url: "/dashboard/hero",
      },
      {
        name: "Marquee",
        url: "/dashboard/marquee",
      },
      {
        name: "About Me",
        url: "/dashboard/aboutme",
      },
      {
        name: "Social Media",
        url: "/dashboard/social-media",
      },
      {
        name: "Discount Project",
        url: "/dashboard/discount-project",
      },
    ],
  },
  {
    pageName: "Details of All sections",
    pageTitle: "Title And Subtitle",
    icon: <TbSection />,
    subItems: [
      {
        name: "create and update",
        url: "/dashboard/title-and-subtitle",
      }
    ],
  },
  {
    pageName: "Frontend Blogs",
    pageTitle: "Blogs",
    icon: <TbBrandBlogger />,
    subItems: [
      {
        name: "All Blogs",
        url: "/dashboard/blog/all-blogs",
      },
      {
        name: "Create Blog",
        url: "/dashboard/blog/create-blog",
      },
      {
        name: "All comments",
        url: "/dashboard/blog/comments",
      },
    ],
  },
  {
    pageName: "Create Projects",
    pageTitle: "Projects",
    icon: <GoProjectSymlink />,
    subItems: [
      {
        name: "All Projects",
        url: "/dashboard/projects/all-projects",
      },
      {
        name: "Create Project",
        url: "/dashboard/projects/create-projects",
      },
      {
        name: "Add Category",
        url: "/dashboard/projects/category",
      },
    ],
  },
  {
    pageName: "Create Image and upload",
    pageTitle: "Gallery",
    icon: <IoImagesOutline />,
    subItems: [
      {
        name: "All Images",
        url: "/dashboard/all-images",
      },
      {
        name: "Upload Images",
        url: "/dashboard/upload-image",
      },
    ],
  },
  {
    pageName: "My personal journey",
    pageTitle: "Qualification",
    icon: <MdCastForEducation />,
    subItems: [
      {
        name: "All Qualification",
        url: "/dashboard/all-qualification",
      },
      {
        name: "Create Qualification",
        url: "/dashboard/create-qualification",
      },
    ],
  },
  {
    pageName: "My personal journey",
    pageTitle: "Testimonials",
    icon: <VscFeedback />,
    subItems: [
      {
        name: "All Testimonials",
        url: "/dashboard/all-testimonials",
      },
      {
        name: "Create Testimonial",
        url: "/dashboard/create-testimonial",
      },
    ],
  },
  {
    pageName: "My personal Skills",
    pageTitle: "Skills",
    icon: <SiSkillshare />,
    subItems: [
      {
        name: "All Skills",
        url: "/dashboard/skills/all-skills",
      },
      {
        name: "Create Skill",
        url: "/dashboard/skills/create-skill",
      },
    ],
  },
  {
    pageName: "My Services",
    pageTitle: "Services",
    icon: <GrServices />,
    subItems: [
      {
        name: "All Services",
        url: "/dashboard/service/all-services",
      },
      {
        name: "Create Skill",
        url: "/dashboard/service/create-service",
      },
    ],
  },
  {
    pageName: "Dashboard Logout",
    pageTitle: "Logout",
    icon: <FaSignOutAlt/>,
    subItems: [
      {
        name: "Logout",
        url: "/api/user/logout",
      }
    ],
  },
];
