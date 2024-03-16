"use client";
import { useRef, useState } from "react";
import { ErrorToast, SuccessToast } from "@/utils/FormHelper";
import Image from "next/image";
import React from "react";
import { MdDeleteSweep } from "react-icons/md";
import { revalidata, uploadPhoto } from "@/utils/actions/uploadActions";
import SubmitButton from "../Others/SubmitButton";
import { CldUploadButton } from "next-cloudinary";

const UploadImages = () => {
  const [uploadLoading, setUploadLoading] = useState(false);

  const [links, setLinks] = useState([]);
  const [linkInput, setLinkInput] = useState("");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categories, setCategories] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [publicId, setPublicId] = useState("");
  const [error, setError] = useState("");
  const [submit, setSubmit] = useState(false);
  const formRef = useRef();
  const [files, setFiles] = useState([]);

  async function handleInputFiles(e) {
    const files = e.target.files;

    const newFiles = [...files].filter((file) => {
      // declare file size
      if (file.size < 1024 * 1024 && file.type.startsWith("image/")) {
        // Only accept image file less than 1mb in size. // je gula 1mb besi oigula newFiles variable count hobe na
        return file;
      }
    });

    setFiles((prev) => [...newFiles, ...prev]);
    formRef.current.reset();
  }

  async function handleDeleteFile(index) {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
  }

  const handleUpload = async (e) => {
    e.preventDefault();
    setSubmit(true);
    if (!files.length) {
      setSubmit(false);
      ErrorToast("No image files are selected.");
    }

    // How many photo Do you upload
    if (files.length > 3) {
      setSubmit(false);
      return ErrorToast("Upload up to 3 image files.");
    }

    var formData = new FormData();

    files &&
      files.forEach((file) => {
        formData.append("files", file);
      });
  };

  const handleImageUpload = (result) => {
    const info = result.info;
    if ("secure_url" in info && "public_id" in info) {
      const url = info.secure_url;
      const public_id = info.public_id;
      setImageUrl(url);
      setPublicId(public_id);
    }
  };
  return (
    <div>
      <div className="dashboard-form-bg p-5">
        <form
          onSubmit={handleUpload}
          className="w-full flex gap-10 items-center"
          ref={formRef}
        >
          <div>
            <label htmlFor="countries" className="dashboard-label">
              Select an option
            </label>
            <select
              defaultValue="DEFAULT"
              id="gallery-categories"
              className="dashboard-input"
            >
              <option value="DEFAULT" disabled>
                Choose a country
              </option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          <div>
            <label className="dashboard-label" htmlFor="file_input">
              Upload file
            </label>
            {/* <input
              className="dashboard-input"
              aria-describedby="file_input_help"
              id="file_input"
              type="file"
              accept="image/*"
              multiple
              onChange={handleInputFiles}
            /> */}
            <CldUploadButton
              uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
              onUpload={handleImageUpload}
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            ></CldUploadButton>
          </div>
        </form>
        <div className="gallery">
          <div className="wrapper">
            {files?.map((data, index) => (
              <div key={index} className="card group">
                <Image
                  fill
                  src={URL.createObjectURL(data)}
                  className="cover group-hover:scale-150"
                  alt=""
                />
                <div
                  className="info group-hover:flex delay-75"
                  onClick={() => handleDeleteFile(index)}
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

export default UploadImages;
