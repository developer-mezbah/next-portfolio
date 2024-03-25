"use client";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
const TypeWriter = ({ data }) => {
  const [typeData, setTypeData] = useState([]);

  useEffect(() => {
    const newArray = []
    data?.forEach((element) => {
      if (element.length) {
        newArray.push(element)
      }
    });
    setTypeData(newArray);
  }, [data]);
  return (
    <span>
      <Typewriter
        options={{
          strings: typeData,
          autoStart: true,
          loop: true,
          cursorClassName: "text-primary",
        }}
      />
    </span>
  );
};

export default TypeWriter;
