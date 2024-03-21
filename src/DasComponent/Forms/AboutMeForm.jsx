"use client";
import { useEffect, useRef, useState } from "react";
import FormTitle from "../Others/FormTitle";
import SubmitButton from "../Others/SubmitButton";
import client_api from "@/utils/api_fetch_fun";
import { ErrorToast, IsEmpty, SuccessToast } from "@/utils/FormHelper";
import AddImage from "../Gallery/AddImage";

const AboutMeForm = () => {
  const [loading, setLoading] = useState(false);
  const [img, setImg] = useState("");
  const [cv, setCv] = useState("");
  const [formData, setFormData] = useState({
    content: "",
    expericed: "",
    projects: "",
    works: "",
  });
  const [id, setId] = useState("");
  useEffect(() => {
    client_api.get("/api/aboutme").then((res) => {
      if (res.data == null) {
        client_api
          .create("/api/aboutme", {...formData, img, cv})
          .then((res) => setId(res.data.id));
      } else {
        setId(res.data.id);
        setFormData({
          ...formData,
          content: res.data.content,
          expericed: res.data.expericed,
          projects: res.data.projects,
          works: res.data.works,
        });
        setCv(res.data.cv);
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
      IsEmpty(formData.content) ||
      IsEmpty(formData.expericed) ||
      IsEmpty(formData.projects) ||
      IsEmpty(formData.works) ||
      IsEmpty(img) ||
      IsEmpty(cv)
    ) {
      return ErrorToast("Must be fill up all Form Input.");
    }
    setLoading(true);
    client_api
      .update(`/api/aboutme?id=${id}`, { ...formData, img, cv })
      .then((res) => {
        if (res.status == "success") {
          SuccessToast("Updated Data!");
          setLoading(false);
        }
      });
  };
  return (
    <div className="dashboard-form-bg flex flex-col mt-5">
      <FormTitle text={"parallax effect"} />
      <form onSubmit={handleSubmit} className="px-10 pb-10">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="content" className="dashboard-label">
              Content
            </label>
            <textarea
              type="text"
              id="content"
              className="dashboard-input"
              placeholder="Write marquee Title"
              name="content"
              value={formData.content}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="expericed" className="dashboard-label">
              experience
            </label>
            <textarea
              type="text"
              id="expericed"
              className="dashboard-input"
              placeholder="Write How many have experience"
              name="expericed"
              value={formData.expericed}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="works" className="dashboard-label">
              works
            </label>
            <textarea
              type="text"
              id="works"
              className="dashboard-input"
              placeholder="Write How many works"
              name="works"
              value={formData.works}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="projects" className="dashboard-label">
              projects
            </label>
            <textarea
              type="text"
              id="projects"
              className="dashboard-input"
              placeholder="Write How many projects"
              name="projects"
              value={formData.projects}
              onChange={handleChange}
            />
          </div>
          <div>
            <AddImage
              name={"Image (344 × 272 px)"}
              setImageUrl={setImg}
              imageUrl={img}
            />
          </div>
          <div>
            <AddImage
              name={"Import your CV"}
              setImageUrl={setCv}
              imageUrl={cv}
            />
          </div>
        </div>

        <SubmitButton text={"Submit"} submit={loading} />
      </form>
    </div>
  );
};

export default AboutMeForm;
