"use client";
import { useEffect, useRef, useState } from "react";
import FormTitle from "../Others/FormTitle";
import SubmitButton from "../Others/SubmitButton";
import client_api from "@/utils/api_fetch_fun";
import { ErrorToast, IsEmpty, SuccessToast } from "@/utils/FormHelper";
import AddImage from "../Gallery/AddImage";

const SocialMediaForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    github: "",
    facebook: "",
    medium: "",
    linkedin: "",
  });
  const [id, setId] = useState("");
  useEffect(() => {
    client_api.get("/api/social").then((res) => {
      if (res.data == null) {
        client_api
          .create("/api/social", formData)
          .then((res) => setId(res.data.id));
      } else {
        setId(res.data.id);
        setFormData({
          ...formData,
          github: res.data.github,
          facebook: res.data.facebook,
          medium: res.data.medium,
          linkedin: res.data.linkedin,
        });
      }
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      IsEmpty(formData.linkedin) ||
      IsEmpty(formData.facebook) ||
      IsEmpty(formData.github) ||
      IsEmpty(formData.medium)
    ) {
      return ErrorToast("Must be fill up all Form Input.");
    }
    setLoading(true);
    client_api
      .update(`/api/social?id=${id}`, formData)
      .then((res) => {
        if (res.status == "success") {
          SuccessToast("Updated Data!");
          setLoading(false);
        }
      });
  };
  return (
    <div className="dashboard-form-bg flex flex-col mt-5">
      <FormTitle text={"Social Media"} />
      <form onSubmit={handleSubmit} className="px-10 pb-10">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="Facebook" className="dashboard-label">
              Facebook
            </label>
            <textarea
              type="text"
              id="Facebook"
              className="dashboard-input"
              placeholder="Add your Facebook Profile Link"
              name="facebook"
              value={formData.facebook}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="Github" className="dashboard-label">
              Github
            </label>
            <textarea
              type="text"
              id="Github"
              className="dashboard-input"
              placeholder="Add your Github Profile Link"
              name="github"
              value={formData.github}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="Linkedin" className="dashboard-label">
              Linkedin
            </label>
            <textarea
              type="text"
              id="Linkedin"
              className="dashboard-input"
              placeholder="Add your Linkedin Profile Link"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="Medium" className="dashboard-label">
            Medium
            </label>
            <textarea
              type="text"
              id="Medium"
              className="dashboard-input"
              placeholder="Add your Medium Profile Link"
              name="medium"
              value={formData.medium}
              onChange={handleChange}
            />
          </div>
        </div>

        <SubmitButton text={"Submit"} submit={loading} />
      </form>
    </div>
  );
};

export default SocialMediaForm;
