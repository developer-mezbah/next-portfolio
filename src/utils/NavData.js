import { SiPowerpages } from "react-icons/si";
import { FaHome } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { ImProfile } from "react-icons/im";
import { TbBrandBlogger } from "react-icons/tb";
import { IoImagesOutline } from "react-icons/io5";
import { MdCastForEducation } from "react-icons/md";

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
        name: "alert",
        url: "/dashboard/alert",
      },
      {
        name: "Table",
        url: "/dashboard/table",
      },
      {
        name: "Create Form",
        url: "/dashboard/create-form",
      },
    ],
  },
  // {
  //   pageName: "personal info",
  //   pageTitle: "Profile",
  //   icon: <ImProfile />,
  //   subItems: [
  //     {
  //       name: "My Profile",
  //       url: "/dashboard/my-profile",
  //     },
  //     {
  //       name: "Inbox",
  //       url: "/dashboard/inbox",
  //     },
  //   ],
  // },
  {
    pageName: "Frontend Blogs",
    pageTitle: "Blogs",
    icon: <TbBrandBlogger />,
    subItems: [
      {
        name: "All Blogs",
        url: "/dashboard/all-blogs",
      },
      {
        name: "Create Blog",
        url: "/dashboard/create-blog",
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
];
