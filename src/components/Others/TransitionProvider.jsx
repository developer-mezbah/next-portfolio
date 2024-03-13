"use client";

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  const [show, setShow] = useState(
    pathName.includes("dashboard") ? false : true
  );

  return (
    <>
      {show ? (
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
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {pathName === "/" ? "Home" : pathName.substring(1)}
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
      ): children}
    </>
  );
};

export default TransitionProvider;
