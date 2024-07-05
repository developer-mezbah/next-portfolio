"use client";
import { useState } from "react";
import FormTitle from "../Others/FormTitle";
import SubmitButton from "../Others/SubmitButton";
import AddImage from "../Gallery/AddImage";
import client_api from "@/utils/api_fetch_fun";
import { ErrorToast, IsEmpty, SuccessToast } from "@/utils/FormHelper";
import { useRouter } from "next/navigation";
import { IoIosCloseCircleOutline } from "react-icons/io";

const TestimonialForm = ({ name, data, setUpdateForm }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: data?.name || "",
    title: data?.title || "",
    description: data?.description || "",
    rating: data?.rating || 0,
  });
  const [img, setImg] = useState(setUpdateForm ? data?.img || "" : "");
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //validation data
    if (
      IsEmpty(formData.title) ||
      IsEmpty(formData.name) ||
      IsEmpty(formData.description) ||
      IsEmpty(formData.rating) ||
      IsEmpty(img)
    ) {
      return ErrorToast("You're not fill full form!");
    }
    if (data) {
      client_api
        .update(`/api/dashboard/testimonial?id=${data.id}`, {
          name: formData.name,
          title: formData.title,
          description: formData.description,
          rating: parseFloat(formData.rating),
          img,
        })
        .then((res) => {
          if (res.status == "success") {
            SuccessToast("Data Updated!");
            setUpdateForm(false);
            router.push("/dashboard/all-testimonials");
            router.refresh();
          } else {
            ErrorToast("Something went wrong!");
          }
        });
    } else {
      client_api
        .create("/api/dashboard/testimonial", {
          name: formData.name,
          title: formData.title,
          description: formData.description,
          rating: parseFloat(formData.rating),
          img,
        })
        .then((res) => {
          if (res.status == "success") {
            SuccessToast("Data Added");
            setFormData({
              title: "",
              name: "",
              description: "",
              rating: "",
            });

            router.push("/dashboard/all-testimonials");
            router.refresh();
          } else {
            ErrorToast("Something went wrong!");
          }
        });
    }
  };
  return (
    <>
      <div className="dashboard-form-bg flex flex-col">
        <div className="flex items-center justify-between">
          <FormTitle text={name || "Update"} />
          {data && (
            <div
              onClick={() => setUpdateForm(false)}
              className="cursor-pointer text-6xl md:mr-10 mr-5 text-red-500"
            >
              <IoIosCloseCircleOutline/>
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="px-10 pb-10">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="dashboard-label">
                name
              </label>
              <input
                type="text"
                id="name"
                className="dashboard-input"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="Title" className="dashboard-label">
                Title
              </label>
              <input
                type="text"
                id="Title"
                className="dashboard-input"
                placeholder="Title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="description" className="dashboard-label">
                description
              </label>
              <textarea
                rows={4}
                type="text"
                id="description"
                className="dashboard-input"
                placeholder="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="ratting" className="dashboard-label">
                ratting
              </label>
              <input
                type="number"
                id="ratting"
                className="dashboard-input"
                placeholder="Ratting"
                name="rating"
                value={formData.rating}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <AddImage
                name={"Add Client Image"}
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

export default TestimonialForm;
