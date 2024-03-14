"use client";
import { useRef, useState } from "react";
import FormTitle from "../Others/FormTitle";
import Horizontal from "../Others/Horizontal";
import Image from "next/image";
import { MdDeleteSweep, MdNoteAdd } from "react-icons/md";
import Link from "next/link";
import { deletePhoto } from "@/utils/actions/uploadActions";
import Swal from "sweetalert2";
import { SuccessToast } from "@/utils/FormHelper";

const AllImages = ({ photos }) => {
  async function handleDeletePhoto(public_id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deletePhoto(public_id);
        if (res.msg == "Delete Success") {
          return SuccessToast("Delete Success")
        }
      }
    });
  }
  return (
    <div className="gallery dashboard-form-bg">
      <div className="">
        <div className="flex justify-between items-center">
          <ul className="flex justify-start items-center px-5">
            <li className="cursor-pointer px-5 py-3 text-textColor bg-themeColor m-5 rounded-xl ">
              Blogs
            </li>
            <li className="cursor-pointer px-5 py-3 text-textColor bg-bgDark m-5 rounded-xl ">
              projects
            </li>
            <li className="cursor-pointer px-5 py-3 text-textColor bg-bgDark m-5 rounded-xl ">
              Github
            </li>
            <li className="cursor-pointer px-5 py-3 text-textColor bg-bgDark m-5 rounded-xl ">
              Hero
            </li>
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
            {photos?.map((data, i) => (
              <div key={i} className="card group">
                <Image
                  fill
                  src={data?.secure_url}
                  className="cover group-hover:scale-150"
                  alt=""
                />
                <div
                  onClick={() => handleDeletePhoto(data?.public_id)}
                  className="info group-hover:flex delay-75"
                >
                  <div
                    className=" border-red-400 border-2 rounded-full hover:bg-red-500 text-red-500 hover:text-white"
                    style={{ padding: "10px" }}
                  >
                    <MdDeleteSweep className="text-4xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllImages;
