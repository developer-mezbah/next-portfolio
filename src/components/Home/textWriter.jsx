"use client";

import { TypewriterEffect } from "../Others/TypeWriterEffect";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "I",
    },
    {
      text: "am",
    },
    {
      text: "a",
    },
    {
      text: "full Stack",
      className: "text-slate-500",
    },
    {
      text: "Developer.",
      className: "text-[#E057E0] dark:text-[#E057E0]",
    },
  ];
  return (
      <TypewriterEffect words={words}/>
  );
}
