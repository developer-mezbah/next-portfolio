"use client";
import client_api from "@/utils/api_fetch_fun";
import { ErrorToast, IsEmpty, SuccessToast } from "@/utils/FormHelper";
import { useEffect, useState } from "react";
import AddImage from "../Gallery/AddImage";
import FormTitle from "../Others/FormTitle";
import SubmitButton from "../Others/SubmitButton";

const DiscountProjectForm = () => {
  const [loading, setLoading] = useState(false);
  const [img, setImg] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    sub_title: "",
  });
  const [id, setId] = useState("");
  useEffect(() => {
    client_api.get("/api/dashboard/discount-porject").then((res) => {
      if (res.data == null) {
        client_api
          .create("/api/dashboard/discount-porject", {...formData, img})
          .then((res) => setId(res.data.id));
      } else {
        setId(res.data.id);
        setFormData({
          ...formData,
          title: res.data.title,
          sub_title: res.data.sub_title
        });
        setImg(res.data.img);
      }
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      IsEmpty(formData.title) ||
      IsEmpty(formData.sub_title) ||
      IsEmpty(img) 
    ) {
      return ErrorToast("Must be fill up all Form Input.");
    }
    setLoading(true);
    client_api
      .update(`/api/dashboard/discount-porject?id=${id}`, { ...formData, img })
      .then((res) => {
        if (res.status == "success") {
          SuccessToast("Updated Data!");
          setLoading(false);
        }
      });
  };

  function generateOrderId() {
    const min = 10000000000;
    const max = 99999999999; 
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return (
    <div className="dashboard-form-bg flex flex-col mt-5">
      <FormTitle text={"parallax effect"} />
      <form onSubmit={handleSubmit} className="px-10 pb-10">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="title" className="dashboard-label">
            Title
            </label>
            <input
              type="text"
              id="title"
              className="dashboard-input"
              placeholder="Write Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="sub-title" className="dashboard-label">
              Sub Title
            </label>
            <textarea
              type="text"
              id="sub-title"
              className="dashboard-input"
              placeholder="Write Sub Title"
              name="sub_title"
              value={formData.sub_title}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <AddImage
              name={"Discount Project Image"}
              setImageUrl={setImg}
              imageUrl={img}
              uniqueId={generateOrderId()}
            />
          </div>
        </div>

        <SubmitButton text={"Submit"} submit={loading} />
      </form>
    </div>
  );
};

export default DiscountProjectForm;
