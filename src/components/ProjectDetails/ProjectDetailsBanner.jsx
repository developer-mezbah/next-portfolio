import Image from "next/image";
import Link from "next/link";
import { FaCode } from "react-icons/fa6";
import { VscPreview } from "react-icons/vsc";

const ProjectDetailsBanner = () => {
  return (
    <div className="flex justify-center items-center overflow-auto">
      <div className="w-full h-full relative">
        <div
          className="pb-14 bg-transparent py-4 px-4 rounded-3xl h-full shadow-2xl"
          style={{ border: "8px solid var(--first-color)" }}
        >
          <Image
            width={600}
            height={500}
            src="/images/portfolio1.jpg"
            className="h-[150%] w-full"
            alt=""
          />

          <div className="flex justify-between">
            <div className="py-4 flex space-x-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
              <p className="text-lg font-semibold mb-2">Category</p>
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
                Mezbah Uddin
              </p>
              <div className="flex justify-center">
                <Image
                  width={20}
                  height={20}
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  className="w-14 h-14 rounded-full border-2 border-white"
                  alt=""
                />
              </div>
            </div>
            <div className="py-4 pl-6 rounded-lg mb-3 sm:mb-0 w-full flex items-center">
              <Link
                href={"#"}
                className="flex w-4/5 items-center gap-2 bg-gradient-to-b to-purple-300 from-purple-500 hover:to-purple-400 hover:from-purple-600  text-white font-bold py-4 px-4 rounded-lg uppercase text-sm  shadow-xl"
              >
                <FaCode className="text-2xl" />
                Code
              </Link>
            </div>
            <Link
              href={"#"}
              className="py-4 rounded-lg mb-3 sm:mb-0 w-full flex items-center"
            >
              <button className="flex w-4/5 items-center gap-2 bg-gradient-to-b from-purple-300 to-purple-600 hover:to-purple-400 hover:from-purple-600 delay-75 text-white font-bold py-4 px-4 rounded-lg uppercase text-sm  shadow-xl">
                <VscPreview className="text-2xl" /> Preview
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsBanner;