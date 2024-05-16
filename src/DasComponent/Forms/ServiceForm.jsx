"use client";
import React, { useState } from "react";
import FormTitle from "../Others/FormTitle";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import SubmitButton from "../Others/SubmitButton";
import parse from "html-react-parser";
import { ErrorToast, IsEmpty, SuccessToast } from "@/utils/FormHelper";
import client_api from "@/utils/api_fetch_fun";
import { useRouter } from "next/navigation";

const ServiceForm = ({ setUpdateForm, updateFormData }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [services, setServices] = useState(updateFormData?.service_items || []);
  const [svg, setSvg] = useState(updateFormData?.svg || "");
  const handleService = () => {
    if (IsEmpty(name)) {
      return ErrorToast("Fill up services name form.");
    }
    services.push({ name: name });
    setName("");
  };
  const handleDelete = (i) => {
    const newArray = [];
    services.forEach((element, index) => {
      if (index != i) {
        newArray.push(element);
      }
      setServices(newArray);
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const title = e.target.title.value;
    const svg = e.target.svgIcon.value;
    const formData = {
      title,
      svg,
      services,
    };
    if (updateFormData) {
      client_api
        .update(`/api/dashboard/services?id=${updateFormData?.id}`, formData)
        .then((result) => {
          if (result.status === "success") {
            setLoading(false);
            e.target.reset();
            setSvg("");
            SuccessToast("Updated services.");
            setUpdateForm(false);
          }
        });
    } else {
      client_api.create("/api/dashboard/services", formData).then((result) => {
        if (result.status === "success") {
          setLoading(false);
          e.target.reset();
          setServices([]);
          setSvg("");
          SuccessToast("Added services.");
          router.push("/dashboard/service/all-services");
        }
      });
    }
  };
  return (
    <div>
      <div className="dashboard-form-bg flex flex-col">
        <div className="flex justify-between items-center">
          <FormTitle text={"Add Service"} />{" "}
          {updateFormData && (
            <button
              onClick={() => setUpdateForm(false)}
              className="text-5xl rounded-full mr-10"
            >
              <IoMdClose className="text-red-400 border-red-500 border-2 rounded-full" />
            </button>
          )}
        </div>
        <form onSubmit={handleSubmit} className="px-10 pb-10">
          <div className="flex flex-wrap gap-5 my-5 py-2 rounded text-white items-center">
            {services?.map((item, index) => (
              <div
                key={index}
                className="flex gap-2 bg-themeColor p-2 rounded-md items-center"
              >
                <div>{item?.name}</div>
                <IoMdClose
                  onClick={() => handleDelete(index)}
                  className="text-xl text-red-200 cursor-pointer bg-red-500 rounded-full"
                />
              </div>
            ))}
          </div>
          <div className="flex gap-20 mb-6 items-center">
            <div className="w-full flex gap-4">
              <div className="w-full">
                <label htmlFor="skillName" className="dashboard-label">
                  Service Name
                </label>
                <input
                  type="text"
                  id="skillName"
                  className="dashboard-input"
                  placeholder="write Service name"
                  name="serviceName"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <span
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border border-themeColor text-textColor hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] flex items-center gap-3 w-[100px] h-[50px] mt-5 cursor-pointer"
                onClick={handleService}
              >
                Add
                <IoMdAdd className="text-xl" />
              </span>
            </div>
            <div className="w-full">
              <label htmlFor="title" className="dashboard-label">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="dashboard-input"
                placeholder="write title"
                name="title"
                defaultValue={updateFormData?.title || ""}
              />
            </div>
          </div>
          <div className="flex gap-6 mb-6">
            <div className="w-full">
              <label htmlFor="svgIcon" className="dashboard-label">
                SVG ICON
              </label>
              <textarea
                type="text"
                id="svgIcon"
                rows={5}
                className="dashboard-input"
                placeholder="paste your svg tag"
                name="svgIcon"
                onChange={(e) => setSvg(e.target.value)}
                defaultValue={updateFormData?.svg || ""}
              />
            </div>
            <div className="dashboard-svg w-2/3">{parse(svg)}</div>
          </div>
          <SubmitButton text={"Submit"} submit={loading} />
        </form>
      </div>
    </div>
  );
};

export default ServiceForm;
