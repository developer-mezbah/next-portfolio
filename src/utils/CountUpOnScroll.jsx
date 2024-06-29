"use client"
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const CountUpOnScroll = ({ number }) => {
  const counterDisplay = number >= 1000 ? (number / 1000).toFixed(1) : number;
  const [ref, inView] = useInView({
    triggerAlways: true,
  });

  const [resetCountUp, setResetCountUp] = useState(false);

  useEffect(() => {
    if (inView) {
      // Reset the CountUp component when it comes into view
      setResetCountUp(true);
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <CountUp
        start={0}
        end={resetCountUp ? counterDisplay : 0}
        duration={2.75}
        separator=" "
        decimals={number >= 1000 ? 1 : 0}
        decimal="."
        prefix=""
        suffix={number >= 1000 ? "" : "+"}
        redraw={true} // Ensure the CountUp component is redrawn when props change
      />
    </div>
  );
};

export default CountUpOnScroll;
