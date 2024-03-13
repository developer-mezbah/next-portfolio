"use client";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Horizontal from "../Others/Horizontal";

const NavItems = ({ data }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [dropDown, setDropdown] = useState(false);
  const [activeNavbar, setActiveNavar] = useState(0);

  // when dropdown has 1 items, then its redirect 1 items
  const handleNavItem = () => {
    setDropdown(!dropDown);
    if (data.subItems.length === 1 && !dropDown) {
      router.push(data.subItems[0].url);
    }
    if (data.pageName === "main") {
      setDropdown(true);
    }
  };

  useEffect(() => {
    data?.subItems.forEach((element) => {
      if (element.url === pathname) {
        setDropdown(!dropDown);
      }
    });
  }, []);
  return (
    <>
      <div className="nav-pages px-5 space-y-2 pb-5 block">
        <span className={`uppercase text-textColor text-sm opacity-75`}>
          {data.pageName}
        </span>
        <div
          onClick={handleNavItem}
          className={`nav-title flex justify-between items-center ${
            data.subItems[activeNavbar].url === pathname
              ? "text-white"
              : "text-textColor"
          } cursor-pointer`}
        >
          <div className="flex items-center gap-5">
            <span className="text-xl">{data.icon}</span>
            <div className="flex gap-2 items-center my-2">
              <span className="text-lg">{data.pageTitle}</span>
              <span
                className="text-warning rounded-lg"
                style={{ background: "#7e7e183b", padding: "2px 5px" }}
              >
                {data.subItems.length}
              </span>
            </div>
          </div>
          <span>{dropDown ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
        </div>
        {dropDown && (
          <ul className="navbar-bullet text-textColor pl-5 space-y-1 dropdown-anime">
            {data.subItems?.map((item, i) => (
              <li key={i} onClick={() => setActiveNavar(i)}>
                <Link href={item.url}>
                  <span
                    className={`pl-6 hover:text-white ${
                      item.url === pathname ? "text-white" : ""
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="mb-3">
        <Horizontal />
      </div>
    </>
  );
};

export default NavItems;
