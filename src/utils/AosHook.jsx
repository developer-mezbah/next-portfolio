"use client";

import AOS from "aos";

import { useEffect } from "react";

const AosHook = ({ children }) => {
  useEffect(() => {
    AOS.init();
    document.querySelectorAll("img").forEach((img) => {
      img.addEventListener("load", () => AOS.refresh());
    });
    // AOS.refresh();
  }, []);

  return children;
};

export default AosHook;
