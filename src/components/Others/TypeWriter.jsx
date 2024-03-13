"use client";
import Typewriter from "typewriter-effect";
const TypeWriter = () => {
  return (
    <span>
      <Typewriter
        options={{
          strings: ["Mezbah Uddin", "Web Desighner", "Web Developer"],
          autoStart: true,
          loop: true,
          cursorClassName: "text-primary"
        }}
      />
    </span>
  );
};

export default TypeWriter;
