import Image from "next/image";
import React from "react";

const loading = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-black">
      <div className="relative flex justify-center items-center">
        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-[#E057E0]" />
        <Image
          width={100}
          height={100}
          alt="Loading Logo"
          src="/images/loading.png"
          className="rounded-full h-28 w-28 p-5"
        />
      </div>
    </div>
  );
};

export default loading;
