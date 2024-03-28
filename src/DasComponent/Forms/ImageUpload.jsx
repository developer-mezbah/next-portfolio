"use client";
import { useRef, useState } from "react";
import { ErrorToast, SuccessToast } from "@/utils/FormHelper";
import Image from "next/image";
import React from "react";
import { MdDeleteSweep } from "react-icons/md";
import SubmitButton from "../Others/SubmitButton";
import { CldUploadButton } from "next-cloudinary";
import Swal from "sweetalert2";
import client_api from "@/utils/api_fetch_fun";
import { useRouter } from "next/navigation";

const ImageUpload = ({ category }) => {
  const router = useRouter()
  const [imageCategory, setImageCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [publicId, setPublicId] = useState("");

  async function handleInputFiles(e) {
    const files = e.target.files;
  }

  const handleUpload = async (e) => {
    e.preventDefault();
  };

  const handleImageUpload = async (result) => {
    const info = result.info;
    if ("secure_url" in info && "public_id" in info) {
      const url = info.secure_url;
      const public_id = info.public_id;
      setImageUrl(url);
      setPublicId(public_id);
      await client_api
        .create(`/api/dashboard/gallery/images?id=${imageCategory}`, {
          img_url: url,
          public_id,
        })
        .then((res) => {
          if (res.status == "success") {
            Swal.fire({
              title: "Image uploaded!",
              text: "You clicked the button!",
              icon: "success",
            });
            router.push("/dashboard/all-images")
          }
        });
    }
  };
  return (
    <div className="dashboard-form-bg p-5">
      <form onSubmit={handleUpload} className="w-full flex gap-10 items-center">
        <div>
          <label htmlFor="countries" className="dashboard-label">
            Select an option
          </label>
          <select
            defaultValue="DEFAULT"
            id="gallery-categories"
            className="dashboard-input"
            onChange={(e) => setImageCategory(e.target.value)}
          >
            <option value="DEFAULT" disabled>
              Choose a Category
            </option>
            {category?.map((data) => (
              <option key={data.id} value={data.id}>
                {data.cat_name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="dashboard-label" htmlFor="file_input">
            Upload file
          </label>
          {!imageCategory == "" ? (
            <CldUploadButton
              uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
              onUpload={handleImageUpload}
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            />
          ) : (
            <button
              onClick={() => ErrorToast("You're not selected image Category!")}
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Upload
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ImageUpload;
