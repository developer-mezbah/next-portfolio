"use client";
import Link from "next/link";
import { MdOutlineHome } from "react-icons/md";
import { FaUserAstronaut } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { FcServices } from "react-icons/fc";
import { GoProjectSymlink } from "react-icons/go";
import { VscSend } from "react-icons/vsc";
import { RiAppsLine } from "react-icons/ri";
import { IoMoonOutline } from "react-icons/io5";
import { LuSunMoon } from "react-icons/lu";
import { TfiClose } from "react-icons/tfi";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBlog } from "react-icons/fa";

const navData = [
  {
    id: 1,
    name: "Home",
    url: "/",
    icon: <MdOutlineHome />,
  },
  {
    id: 2,
    name: "About",
    url: "/about",
    icon: <FaUserAstronaut />,
  },
  {
    id: 3,
    name: "Skills",
    url: "/skills",
    icon: <GiSkills />,
  },
  {
    id: 4,
    name: "Services",
    url: "/services",
    icon: <FcServices />,
  },
  {
    id: 5,
    name: "Projects",
    url: "/projects",
    icon: <GoProjectSymlink />,
  },
  {
    id: 6,
    name: "ContactMe",
    url: "/contact",
    icon: <VscSend />,
  },{
    id: 7,
    name: "Blogs",
    url: "/blogs",
    icon: <FaBlog />,
  },
];

const Navbar = () => {
  const path = usePathname();
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close");

    if (navToggle) {
      navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
      });
    }
    /*===== MENU HIDDEN =====*/
    if (navClose) {
      navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
      });
    }
    const navLink = document.querySelectorAll(".nav__link");
    navLink.forEach((n) =>
      n.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
      })
    );

    /*==================== DARK LIGHT THEME ====================*/
    const themeButton = document.getElementById("theme-button");
    const darkTheme = "dark-theme";
    const selectedTheme = localStorage.getItem("selected-theme");
    const getCurrentTheme = () =>
      document.body.classList.contains(darkTheme) ? "dark" : "light";
    if (selectedTheme) {
      document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
      );
    }
    themeButton.addEventListener("click", () => {
      document.body.classList.toggle(darkTheme);
      localStorage.setItem("selected-theme", getCurrentTheme());
    });
  }, []);
  return (
    <header className="header" id="header" style={{ paddingTop: "15px" }}>
      <nav className="nav cus_container">
        <Link href="/dashboard" className="nav__logo">
          Mezbah.Dev
        </Link>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list cus_grid">
            {navData?.map((nav) => (
              <li key={nav.id} className="nav__item">
                <Link
                  href={nav.url || "#"}
                  className={
                    nav.url === path ? "nav__link active-link" : "nav__link"
                  }
                >
                  {/* <i className="uil uil-estate" />  */}
                  {nav.icon}
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
          <TfiClose className="nav__close" id="nav-close" />
        </div>
        <div className="nav__btns">
          {/* Theme Change button */}
          <span id="theme-button" onClick={() => setDark(!dark)}>
            {dark ? (
              <LuSunMoon className="change-theme" />
            ) : (
              <IoMoonOutline className="change-theme" />
            )}
          </span>
          <div className="nav__toggle" id="nav-toggle">
            <RiAppsLine />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
