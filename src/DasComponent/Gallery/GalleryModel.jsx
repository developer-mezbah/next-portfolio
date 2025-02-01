import { useGalleryModel } from "@/_zustand/store";
import client_api from "@/utils/api_fetch_fun";
import { useEffect, useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import AllImages from "./AllImages";

const GalleryModel = () => {
  const [categories, setCategories] = useState([]);
  const [isSelectedImage, setIsSelectImage] = useState("");

  const {
    setShowModel,
    setSelectImageUrl,
    showModel,
    selectedImgUrl,
    imageUrl,
    setUniqueKey,
    uniqueKey,
  } = useGalleryModel();
  useEffect(() => {
    client_api
      .get("/api/dashboard/gallery/category")
      .then((res) => setCategories(res.data));
  }, []);

  const handleSelectImage = () => {
    setShowModel(false);
    setSelectImageUrl({ key: uniqueKey, url: isSelectedImage });
  };
  return (
    <>
      {showModel && (
        <div>
          <div className="fixed top-20 left-0 right-0 h-[500px] w-[800px] rounded-xl m-auto z-[999999] overflow-scroll gallery-model">
            <div className="mt-10 h-full">
              <AllImages
                categories={categories}
                showModel={showModel}
                setIsSelectImage={setIsSelectImage}
              />
            </div>
          </div>
          <div className="mx-auto bottom-0 mt-[430px] fixed top-20 left-0 right-5 w-[800px] z-[999999]">
            <div className="dashboard-form-bg -mt-[20px] float-end pl-4 pt-4 pr-3 pb-3 flex">
              <button
                onClick={() => setShowModel(false)}
                type="button"
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                <FaRegWindowClose className="text-lg" />
              </button>
              <button
                onClick={handleSelectImage}
                type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Select
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryModel;
