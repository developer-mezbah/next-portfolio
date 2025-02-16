"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();
  return (
    <>
      {!pathName.includes("dashboard") ? (
        <AnimatePresence mode="wait">
          <div key={pathName} className="w-screen h-full">
            <motion.div
              className="h-screen w-screen fixed bg-black rounded-b-[100px] z-[200] top-0"
              animate={{ height: "0vh" }}
              exit={{ height: "140vh" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
            <motion.div
              className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default w-fit h-fit z-[300]"
              initial={{ opacity: 1, display: "block" }}
              animate={{ opacity: 0, display: "none" }}
              exit={{ opacity: 0, display: "none" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div
                className={`md:w-4/5 w-5/6 mx-auto capitalize ${
                  pathName.includes("/blog-details/") ||
                  pathName.includes("/project-details/")
                    ? "text-4xl"
                    : ""
                }`}
              >
                {pathName === "/" ? "Home" : pathName.substring(1)}
              </div>
            </motion.div>
            <motion.div
              className="h-full w-screen fixed bg-black rounded-t-[100px] bottom-0 z-[200]"
              initial={{ height: "140vh" }}
              animate={{ height: "0vh", transition: { delay: 0.5 } }}
            />
            {/* <div className="h-24">
        navbar add
        </div> */}
            <div className="h-full">{children !== "/" ? children : "Home"}</div>
          </div>
        </AnimatePresence>
      ) : (
        children
      )}
    </>
  );
};

export default TransitionProvider;
