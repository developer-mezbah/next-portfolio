import Image from "next/image";
import React from "react";
import Horizontal from "../Others/Horizontal";
import { NavData } from "@/utils/NavData";

const SmallNavbar = () => {
  return (
    <div className="w-[80px]">
      <div className="smaill-logo">
        <Image
          width={100}
          height={100}
          alt="Logo"
          src={"/images/icon-logo.png"}
          className="w-10 h-10 mx-auto my-4"
        />
      </div>
      <Horizontal />
      <div className="mt-5 space-y-3">
        {NavData?.map((data, index) => {
          return (
            <div key={index} className="py-2 px-7 flex flex-col gap-5">
              <div className="text-2xl text-textColor">{data.icon}</div>
              <div className="mt-3">
                <span className="bullet ml-7"></span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SmallNavbar;
