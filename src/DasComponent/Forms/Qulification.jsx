"use client";
import client_api from "@/utils/api_fetch_fun";
import { ErrorToast, IsEmpty, SuccessToast } from "@/utils/FormHelper";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import FormTitle from "../Others/FormTitle";
import SubmitButton from "../Others/SubmitButton";

const Qulification = ({ name, data, setUpdateForm }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: data?.title || "",
    institute_name: data?.institute_name || "",
    session: data?.session || "",
    role: data?.role || "",
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //validation data
    if (
      IsEmpty(formData.title) ||
      IsEmpty(formData.institute_name) ||
      IsEmpty(formData.session) ||
      IsEmpty(formData.role)
    ) {
      return ErrorToast("Something went Wrong!");
    }

    if (data) {
      client_api
        .update(`/api/dashboard/qualification?id=${data.id}`, formData)
        .then((res) => {
          if (res.status == "success") {
            SuccessToast("Data Updated!");
            setUpdateForm(false);
            router.refresh();
          } else {
            ErrorToast("Something went wrong!");
          }
        });
    } else {
      client_api.create("/api/dashboard/qualification", formData).then((res) => {
        if (res.status == "success") {
          SuccessToast("Data Added");
          setFormData({
            title: "",
            institute_name: "",
            session: "",
            role: "",
          });
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
          <FormTitle text={name || "Qualification"} />
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
              <label htmlFor="qualificationtitle" className="dashboard-label">
                Qualification title
              </label>
              <input
                type="text"
                id="qualificationtitle"
                className="dashboard-input"
                placeholder="input title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label
                htmlFor="qualificationInstittuename"
                className="dashboard-label"
              >
                Institute Name
              </label>
              <input
                type="text"
                id="qualificationInstittuename"
                className="dashboard-input"
                placeholder="Institute name"
                name="institute_name"
                value={formData.institute_name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="date" className="dashboard-label">
                Session
              </label>
              <input
                type="text"
                id="date"
                className="dashboard-input"
                placeholder="Input data when start your course."
                name="session"
                value={formData.session}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="qulification-role" className="dashboard-label">
                Role
              </label>
              <select
                defaultValue="DEFAULT"
                id="qulification-role"
                className="dashboard-input"
                name="role"
                onChange={handleInputChange}
              >
                <option value="DEFAULT" disabled>
                  Select Options
                </option>
                <option value="Education">Education</option>
                <option value="Work">Work</option>
              </select>
            </div>
          </div>
          <SubmitButton text={"Add"} submit={loading} />
        </form>
      </div>
    </>
  );
};

export default Qulification;
