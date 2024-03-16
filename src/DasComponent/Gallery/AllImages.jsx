"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import FormTitle from "../Others/FormTitle";
import Horizontal from "../Others/Horizontal";
import Image from "next/image";
import { MdDeleteSweep, MdNoteAdd } from "react-icons/md";
import Link from "next/link";
import { deletePhoto } from "@/utils/actions/uploadActions";
import Swal from "sweetalert2";
import { SuccessToast } from "@/utils/FormHelper";
import client_api from "@/utils/api_fetch_fun";
import { FaCopy } from "react-icons/fa6";

const AllImages = ({ categories }) => {
  const [photos, setPhotos] = useState([]);
  // async function handleDeletePhoto(public_id) {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then(async (result) => {
  //     if (result.isConfirmed) {
  //       const res = await deletePhoto(public_id);
  //       if (res.msg == "Delete Success") {
  //         return SuccessToast("Delete Success");
  //       }
  //     }
  //   });
  // }

  const getData = (id) => {
    if (id) {
      client_api.get(`/api/gallery/all-images?id=${id}`).then((data) => {
        if (data.status == "success") {
          setPhotos(data?.data);
        }
      });
    } else {
      client_api.get(`/api/gallery/all-images`).then((data) => {
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
  return (
    <div className="gallery dashboard-form-bg">
      <div className="">
        <div className="flex justify-between items-center">
          <ul className="flex justify-start items-center px-5">
            <li
              onClick={getData}
              className="cursor-pointer px-5 py-3 text-textColor bg-themeColor m-5 rounded-xl "
            >
              All
            </li>
            {categories?.map((category) => (
              <li
                key={category.id}
                onClick={() => getData(category.id)}
                className="cursor-pointer px-5 py-3 text-textColor bg-bgDark m-5 rounded-xl "
              >
                {category.cat_name}
              </li>
            ))}
          </ul>
          <Link
            href={"/dashboard/upload-image"}
            className="cursor-pointer px-5 py-3 text-white bg-themeColor m-5 rounded-xl flex justify-center items-center gap-2 "
          >
            <MdNoteAdd />
            Add New
          </Link>
        </div>
        <Horizontal />
        <div>
          <div className="wrapper">
            {photos?.map((data) => (
              <div key={data.id} className="card group">
                <Image
                  width={500}
                  height={500}
                  src={data?.img_url || " "}
                  className="cover group-hover:scale-150"
                  alt=""
                />
                <div className="info group-hover:flex delay-75 gap-5">
                  <div
                    onClick={() => handleDeletePhoto(data?.public_id)}
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
      </div>
    </div>
  );
};

export default AllImages;
