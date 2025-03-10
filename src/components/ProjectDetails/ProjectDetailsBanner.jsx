"use client";
import { ErrorToast } from "@/utils/FormHelper";
import Image from "next/image";
import Link from "next/link";
import { FaCode } from "react-icons/fa6";
import { VscPreview } from "react-icons/vsc";

const ProjectDetailsBanner = ({ data }) => {
  return (
    <div className="flex justify-center items-center overflow-auto">
      <div className="w-full h-full relative">
        <div
          className="md:pb-[7rem] pb-14 bg-transparent pt-4 px-4 rounded-3xl h-full shadow-2xl"
          style={{ border: "8px solid var(--first-color)" }}
        >
          <Image
            width={600}
            height={500}
            src={data?.banner_img || "/images/image-not-found.png"}
            className="max-h-[500px] w-full object-scale-down"
            alt={data?.title}
          />

          <div className="flex justify-between">
            <div className="py-4 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-500 -mt-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
              <p className="text-lg font-semibold mb-2">Authentic</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <div className="flex justify-around w-full">
            <div
              className="sm:block hidden py-4 px-6 rounded-lg w-full"
              style={{ background: "var(--first-color)" }}
            >
              <p className="text-white text-sm text-center font-semibold pb-4">
                {data?.profile?.user_name}
              </p>
              <div className="flex justify-center">
                <Image
                  width={100}
                  height={100}
                  src={data?.profile?.img || "/images/image-not-found.png"}
                  className="w-14 h-14 rounded-full border-2 border-white object-cover"
                  alt={data?.profile?.user_name}
                />
              </div>
            </div>
            <div className="py-4 pl-6 rounded-lg mb-3 sm:mb-0 w-full flex items-center gap-2 md:justify-around justify-end md:mx-12 mr-10">
              {data?.code_url ? (
                <a
                  href={data?.code_url || "#"}
                  className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(110deg,#000103,45%,#E057E0,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  style={{ border: "1px solid var(--first-color)" }}
                  target="_blank"
                >
                  Code
                </a>
              ) : (
                <button
                  onClick={() => ErrorToast("Source Code is not Free!")}
                  className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(110deg,#000103,45%,#E057E0,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  style={{ border: "1px solid var(--first-color)" }}
                >
                  Code
                </button>
              )}
              {data?.preview_url ? (
                <a
                  target="_blank"
                  href={data?.preview_url}
                  className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(110deg,#000103,45%,#E057E0,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  style={{
                    animationDelay: "1.3s",
                    border: "1px solid var(--first-color)",
                  }}
                >
                  Preview
                </a>
              ) : (
                <button
                  onClick={() => ErrorToast("Preview url is not available!")}
                  className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(110deg,#000103,45%,#E057E0,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  style={{
                    animationDelay: "1.3s",
                    border: "1px solid var(--first-color)",
                  }}
                >
                  Preview
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsBanner;
