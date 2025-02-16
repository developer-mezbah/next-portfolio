import Image from "next/image";
import Link from "next/link";
import { FaCode } from "react-icons/fa6";
import { TbListDetails } from "react-icons/tb";
import { VscPreview } from "react-icons/vsc";
import { BackgroundGradient } from "../Others/BackgroundGradient";
import "./ProjectCard.css";

const ProjectCard = ({ data }) => {
  return (
    <BackgroundGradient className="rounded-[22px] dark:bg-zinc-900 overflow-hidden">
      <div className="rounded-lg overflow-hidden md:w-full w-full">
        <div className="w-full h-[350px] overflow-hidden group relative card-div">
          <Image
            // className={`object-cover translate-y-0 group-hover:-translate-y-[65%] transition-transform duration-[3s] w-full`}
            // className="card-img"
            width={500}
            height={500}
            src={data?.long_img}
            alt={data?.title}
            className="w-full"
          />

          <div
            className="absolute bottom-0 right-0 left-0 top-0 gap-3 group-hover:opacity-100 delay-1000 opacity-0"
            style={{ background: "rgb(0,0,0, .4)" }}
          >
            <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              <div className="flex gap-2 mb-2">
                <Link href={data?.code_url || "#"} target="_blank">
                  <div
                    className="flex items-center gap-2 text-white text-xl cursor-pointer px-3 py-1 rounded-lg hover:bg-black"
                    style={{ border: "2px solid var(--first-color)" }}
                  >
                    <FaCode />
                    <span>Code</span>
                  </div>
                </Link>
                <Link href={data?.preview_url || "#"} target="_blank">
                  <div
                    className="flex items-center gap-2 text-white text-xl cursor-pointer px-3 py-1 rounded-lg hover:bg-black"
                    style={{ border: "2px solid var(--first-color)" }}
                  >
                    <VscPreview />
                    <span>Preview</span>
                  </div>
                </Link>
              </div>
              <Link
                href={
                  `/project-details/${data?.title
                    .replace(/[^a-zA-Z0-9-.\s]/g, "")
                    .replace(/ /g, "-")}?id=${data?.id}` || "#"
                }
              >
                <div
                  className="flex items-center gap-2 text-white text-xl cursor-pointer px-3 py-1 rounded-lg hover:bg-black w-1/2 mx-auto"
                  style={{ border: "2px solid var(--first-color)" }}
                >
                  <TbListDetails />
                  <span>Details</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Link
            href={
              `/project-details/${data?.title
                .replace(/[^a-zA-Z0-9-.\s]/g, "")
                .replace(/ /g, "-")}?id=${data?.id}` || "#"
            }
          >
            <p className="bottom-0 w-full text-white text-center font-semibold duration-300 project-card-title py-3">
              {data?.title.length > 110
                ? data?.title.slice(0, 110) + "..."
                : data?.title}
            </p>
          </Link>
          <hr className="h-5 w-full bg-[#E057E0] -mt-5" />
        </div>
      </div>
    </BackgroundGradient>
  );
};

export default ProjectCard;
