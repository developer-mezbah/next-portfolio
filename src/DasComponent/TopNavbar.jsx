"use client";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";
import { FaSearchengin } from "react-icons/fa6";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { MdOutlineNotificationsActive } from "react-icons/md";
import Image from "next/image";
import { RiFullscreenExitFill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";

const TopNavbar = ({ handleNavbar, smallNavbar }) => {
  return (
    <div
      className="top-navbar bg-bgDark fixed right-0 top-0 h-[65px] flex items-center justify-between px-5 border-l-[1px] border-gray-700 z-50"
      style={smallNavbar ? { left: "80px" } : { left: "250px" }}
    >
      <div
        onClick={handleNavbar}
        className="animated-arrow text-3xl font-extrabold cursor-pointer"
      >
        {smallNavbar ? (
          <IoCloseSharp className="text-themeColor" />
        ) : (
          <CgMenuRightAlt className="text-themeColor" />
        )}
      </div>
      <div>
        <ul className="flex justify-center items-center gap-5">
          <li className="relative w-[300px]">
            <input
              className=" border-themeColor border-2 h-[35px] rounded-full outline-none pl-5 w-full"
              type="text"
              name="search"
              placeholder="search"
            />
            <FaSearchengin className="absolute top-[5px] right-[10px] text-2xl text-themeColor" />
          </li>
          <li>
            <Image
              className="rounded-full w-10 h-10 object-cover"
              width={50}
              height={50}
              alt="bangladesh flag"
              src={"/images/flag.jpg"}
            ></Image>
          </li>
          <li>
            <MdOutlineLightMode className="text-xl text-bgDark" />
          </li>
          <li className="relative">
            <BsCart2 className="text-xl text-white" />
            <span className="absolute text-sm -top-3 -right-2 bg-purple-500 text-white px-1 rounded-full">5</span>
          </li>
          <li className="relative">
            <MdOutlineNotificationsActive className="text-xl text-white" />
            <span className="absolute text-sm -top-3 -right-2 bg-blue-500 text-white px-1 rounded-full pulse">5</span>
          </li>
          <li>
            <RxDashboard className="text-xl text-white" />
          </li>
          <li>
            <RiFullscreenExitFill className="text-xl text-white" />
          </li>
          <li className="flex gap-2">
            <div>
              <Image
                className="w-10 h-10 rounded-full"
                width={20}
                height={20}
                alt="avatar"
                src={"/images/avatar.jpg"}
              />
            </div>
            <div className="flex flex-col justify-center">
                <span className="text-sm text-textColor">Mezbah Uddin</span>
                <span className="text-xs font-light text-textColor">Web Developer</span>
            </div>
          </li>
          <li>
            <IoSettingsOutline className="text-xl text-white rotating" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNavbar;
