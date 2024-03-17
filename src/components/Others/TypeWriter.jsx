"use client";
import Typewriter from "typewriter-effect";
const TypeWriter = ({data}) => {
  return (
    <span>
      <Typewriter
        options={{
          strings: data,
          autoStart: true,
          loop: true,
          cursorClassName: "text-primary"
        }}
      />
    </span>
  );
};

export default TypeWriter;
