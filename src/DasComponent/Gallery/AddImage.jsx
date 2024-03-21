import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { GrGallery } from "react-icons/gr";
import GalleryModel from "./GalleryModel";
import Image from "next/image";
import { useGalleryModel } from "@/_zustand/store";

const AddImage = ({ name, setImageUrl, imageUrl }) => {
  const { setShowModel, selectedImgUrl,uniqueKey,setUniqueKey } = useGalleryModel();
  useEffect(() => {
    const res = selectedImgUrl.find((url) => url.key === name)
    if(res !== undefined){
      setImageUrl(res.url)
    }
  }, [selectedImgUrl])

  const handleModel = () => {
    setShowModel(true)
    setUniqueKey(name)
  }
  return (
    <div>
      <div>
        <span className="dashboard-label">{name}</span>
        <div className="flex gap-2">
          <button
            onClick={handleModel}
            className="h-12 align-middle hover:bg-themeColor delay-75 hover:text-white select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border border-themeColor text-textColor hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] flex items-center gap-3"
            type="button"
          >
            Gallery
            <GrGallery className="text-xl" />
          </button>
          <Image
            width={200}
            height={200}
            src={imageUrl || "/images/Image_not_available.png"}
            alt="Uploaded Image"
            className="rounded -mt-10 h-[120px] w-[200px] ml-5"
          />
        </div>
      </div>
      {/* 
      <GalleryModel
        selectedImgUrl={setImageUrl}
        showModel={showModel}
        setShowModel={setShowModel}
      /> */}
    </div>
  );
};

export default AddImage;
