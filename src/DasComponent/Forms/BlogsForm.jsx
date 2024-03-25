"use client";
import { useState } from "react";
import FormTitle from "../Others/FormTitle";
import SubmitButton from "../Others/SubmitButton";
import AddImage from "../Gallery/AddImage";
import client_api from "@/utils/api_fetch_fun";
import { ErrorToast, IsEmpty, SuccessToast } from "@/utils/FormHelper";
import { useRouter } from "next/navigation";
import Editor from "@/utils/Editor";

const BlogsForm = ({ name, data, setUpdateForm }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [img, setImg] = useState(data?.img || "");
  const [editorData, setEditorData] = useState(data?.long_des || "");
  const [formData, setFormData] = useState({
    title: data?.title || "",
    short_des: data?.short_des || "",
    keywords: data?.keywords || "",
    highLight: data?.highLight || "",
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //validation data
    if (
      IsEmpty(formData.title) ||
      IsEmpty(formData.short_des) ||
      IsEmpty(formData.keywords) ||
      IsEmpty(img) ||
      IsEmpty(formData.highLight) ||
      IsEmpty(editorData)
    ) {
      return ErrorToast(
        "Some fields are empty. Please complete all required fields.!"
      );
    }
    setLoading(true);
    if (data) {
      client_api
        .update(`/api/dashboard/blogs?id=${data.id}`,  { ...formData, img, long_des: editorData })
        .then((res) => {
          if (res.status == "success") {
            SuccessToast("Data Updated!");
            setUpdateForm(false);
            setLoading(false);
            router.refresh();
          } else {
            ErrorToast("Something went wrong!");
            setLoading(false);
          }
        });
    } else {
      client_api
        .create("/api/dashboard/blogs", { ...formData, img, long_des: editorData })
        .then((res) => {
          if (res.status == "success") {
            SuccessToast("Data Added");
            router.push("/dashboard/blog/all-blogs");
            setImg("");
            router.refresh();
            setLoading(false);
          } else {
            ErrorToast("Something went wrong!");
            setLoading(false);
          }
        });
    }
  };
  return (
    <>
      <div className="dashboard-form-bg flex flex-col">
        <FormTitle text={name || "Blog"} />
        <form onSubmit={handleSubmit} className="px-10 pb-10">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label htmlFor="title" className="dashboard-label">
                Blog title
              </label>
              <input
                type="text"
                id="title"
                className="dashboard-input"
                placeholder="write title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="short_des" className="dashboard-label">
                Short description
              </label>
              <textarea
                type="text"
                id="short_des"
                className="dashboard-input"
                placeholder="Write Short description"
                name="short_des"
                value={formData.short_des}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="keywords" className="dashboard-label">
                keywords
              </label>
              <input
                type="text"
                id="date"
                className="dashboard-input"
                placeholder="Write keywords"
                name="keywords"
                value={formData.keywords}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="highLight" className="dashboard-label">
                highLight
              </label>
              <input
                type="text"
                id="highLight"
                className="dashboard-input"
                placeholder="Write highLight key for short description"
                name="highLight"
                value={formData.highLight}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="dashboard-label">Long Description</label>
              <Editor data={editorData} onDataChange={setEditorData} />
            </div>
            <div>
              <AddImage
                name={"Import Blog Image"}
                setImageUrl={setImg}
                imageUrl={img}
              />
            </div>
          </div>
          <SubmitButton text={"Add"} submit={loading} />
        </form>
      </div>
    </>
  );
};

export default BlogsForm;
