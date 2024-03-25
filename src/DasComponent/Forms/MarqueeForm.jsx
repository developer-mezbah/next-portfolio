"use client";
import { useEffect, useRef, useState } from "react";
import FormTitle from "../Others/FormTitle";
import SubmitButton from "../Others/SubmitButton";
import client_api from "@/utils/api_fetch_fun";
import { SuccessToast } from "@/utils/FormHelper";

const MarqueeForm = () => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    reverse_title: "",
  });
  const [id, setId] = useState("");
  useEffect(() => {
    client_api.get("/api/dashboard/marquee").then((res) => {
      if (res.data == null) {
        client_api.create("/api/dashboard/marquee", formData).then(res => setId(res.data.id))
      } else {
        setId(res.data.id);
        setFormData({
          ...formData,
          title: res.data.title,
          reverse_title: res.data.reverse_title,
        });
      }
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    client_api.update(`/api/dashboard/marquee?id=${id}`, formData).then(res => {
        if (res.status == "success") {
            SuccessToast("Updated Data!")
            setLoading(false)
        }
    })
  };
  return (
    <div className="dashboard-form-bg flex flex-col mt-5">
      <FormTitle text={"parallax effect"} />
      <form onSubmit={handleSubmit} className="px-10 pb-10">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="title" className="dashboard-label">
              Title
            </label>
            <textarea
              type="text"
              id="title"
              className="dashboard-input"
              placeholder="Write marquee Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="reverse-parlax" className="dashboard-label">
              Reverse Title
            </label>
            <textarea
              type="text"
              id="reverse-parlax"
              className="dashboard-input"
              placeholder="Write Reverse Title"
              name="reverse_title"
              value={formData.reverse_title}
              onChange={handleChange}
            />
          </div>
        </div>

        <SubmitButton text={"Submit"} submit={loading} />
      </form>
    </div>
  );
};

export default MarqueeForm;
