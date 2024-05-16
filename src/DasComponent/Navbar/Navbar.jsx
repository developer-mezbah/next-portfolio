"use client";
import Image from "next/image";
import Link from "next/link";
import "./Navbar.css";
import TopNavbar from "../TopNavbar";
import { useState } from "react";
import Horizontal from "../Others/Horizontal";
import NavItems from "./NavItems";
import SmallNavbar from "./SmallNavbar";
import { NavData } from "@/utils/NavData";
import { useGalleryModel } from "@/_zustand/store";

const Navbar = () => {
  const { IsSmallNavbar, toggleNavbar } = useGalleryModel();
  const [navToggle, setNavToggle] = useState(false);
  const [smallNavbar, setSmaillNavbar] = useState(false);
  const handleNavbar = () => {
    setSmaillNavbar(!smallNavbar);
    toggleNavbar(!smallNavbar)
  };

  const handleMouseMove = () => {
    if (smallNavbar) {
      setSmaillNavbar(false);
      setNavToggle(true);
      toggleNavbar(!smallNavbar)
    }
  };
  const handleMouseLeave = () => {
    if (navToggle) {
      setSmaillNavbar(true);
      setNavToggle(false);
      toggleNavbar(!smallNavbar)
    }
  };
  return (
    <div>
      <TopNavbar handleNavbar={handleNavbar} smallNavbar={smallNavbar} />
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={
          smallNavbar
            ? "w-[80px] h-screen overflow-y-scroll overflow-x-hidden dashboard-navbar"
            : "w-[250px] h-screen overflow-y-scroll overflow-x-hidden dashboard-navbar"
        }
      >
        <div className={smallNavbar ? "hidden" : "w-[250px]"}>
          <div className="logo py-2">
            <Link href={"/dashboard"}>
              <Image
                src={"/images/logo.png"}
                className="mx-auto h-[70px] my-1 object-cover"
                width={200}
                height={100}
                alt="Logo"
              />
            </Link>
          </div>
          <Horizontal className={"mb-2"} />
          <NavItems data={NavData[0]} />
          {NavData?.slice(1).map((navData, index) => (
            <NavItems data={navData} key={index} />
          ))}
        </div>
        {smallNavbar && <SmallNavbar />}
      </div>
    </div>
  );
};

export default Navbar;
