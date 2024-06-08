"use client";
import { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import FormTitle from "../Others/FormTitle";
import Horizontal from "../Others/Horizontal";
import Image from "next/image";
import { MdDeleteSweep, MdNoteAdd } from "react-icons/md";
import Link from "next/link";
import Swal from "sweetalert2";
import { SuccessToast } from "@/utils/FormHelper";
import client_api from "@/utils/api_fetch_fun";
import { FaCopy } from "react-icons/fa6";
import { DeleteAlert } from "@/utils/DeleteAlert";



const AllImages = ({ categories, showModel, setIsSelectImage }) => {
  const [photos, setPhotos] = useState([]);
  const [selectImage, setSelectImage] = useState("");
  async function handleDeletePhoto(id, public_id) {
    DeleteAlert(`/api/dashboard/gallery/images?id=${id}&public_id=${public_id}`).then(
      (res) => {
        if (res) {
          SuccessToast("Image Deleted!");
          getData();
        }
      }
    );
  }

  const getData = (id) => {
    if (id) {
      client_api.get(`/api/dashboard/gallery/all-images?id=${id}`).then((data) => {
        if (data.status == "success") {
          setPhotos(data?.data);
        }
      });
    } else {
      client_api.get(`/api/dashboard/gallery/all-images`).then((data) => {
        if (data.status == "success") {
          setPhotos(data?.data);
        }
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const textAreaRef = useRef(null);
  function copyToClipboard(e, url) {
    textAreaRef.current.value = url;
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    SuccessToast("Copped!");
  }

  const handleSelectImage = (id, img_url) => {
    setSelectImage(id);
    setIsSelectImage(img_url);
  };
  return (
    <div className="gallery dashboard-form-bg">
      <div className="">
        <div className="flex justify-between items-center">
          <ul className="flex flex-wrap justify-start items-center">
            <li
              onClick={getData}
              className="cursor-pointer px-5 py-3 text-textColor bg-themeColor mx-5 mt-5 rounded-xl hover:bg-violet-600 "
            >
              All
            </li>
            {categories?.map((category) => (
              <li
                key={category.id}
                onClick={() => getData(category.id)}
                className="cursor-pointer px-5 py-3 text-textColor bg-bgDark mx-5 mt-5 rounded-xl  hover:bg-violet-600"
              >
                {category.cat_name}
              </li>
            ))}
          </ul>
          <Link
            href={"/dashboard/upload-image"}
            className="cursor-pointer px-5 py-3 text-white bg-themeColor m-5 rounded-xl flex justify-center items-center gap-2 flex-wrap text-center hover:bg-violet-600"
          >
            <MdNoteAdd />
            <span className="text-sm">Add New</span>
          </Link>
        </div>
        <Horizontal />
        <Suspense fallback={<h2>🌀 Loading...</h2>}>
          <div>
            <div className="wrapper">
              {photos?.map((data) => (
                <div
                  key={data.id}
                  className={`${
                    selectImage == data.id
                      ? " border-themeColor border-4 pl-2 pt-2 -ml-2"
                      : ""
                  }`}
                >
                  <div className="card group flex-wrap">
                    <Image
                      width={500}
                      height={500}
                      src={data?.img_url || " "}
                      className={`cover group-hover:scale-150 ${
                        showModel ? "cursor-pointer" : ""
                      }`}
                      alt=""
                    />
                    <div>
                      {!showModel ? (
                        <div className="info group-hover:flex delay-75 gap-5">
                          <div
                            onClick={() =>
                              handleDeletePhoto(data.id, data?.public_id)
                            }
                            className=" border-red-400 border-2 rounded-full hover:bg-red-500 text-red-500 hover:text-white"
                            style={{ padding: "10px" }}
                          >
                            <MdDeleteSweep className="text-4xl" />
                          </div>
                          <div
                            onClick={(e) => copyToClipboard(e, data.img_url)}
                            className=" border-themeColor delay-75 border-2 rounded-full hover:bg-themeColor text-themeColor hover:text-white"
                            style={{ padding: "10px" }}
                          >
                            <FaCopy className="text-4xl" />
                          </div>
                        </div>
                      ) : (
                        <p
                          onClick={() =>
                            handleSelectImage(data.id, data.img_url)
                          }
                          className="info group-hover:flex delay-75 gap-5 text-white"
                        >
                          Click Me
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {photos.length < 1 && (
                <p className="text-red-500">There is no photo.</p>
              )}
            </div>

            <textarea
              className="opacity-0"
              ref={textAreaRef}
              value={"Mezbah"}
              onChange={() => {}}
            />
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default AllImages;
