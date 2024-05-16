"use client";
import React, { useState } from "react";
import FormTitle from "../Others/FormTitle";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import SubmitButton from "../Others/SubmitButton";
import parse from "html-react-parser";
import { ErrorToast, IsEmpty, SuccessToast } from "@/utils/FormHelper";
import client_api from "@/utils/api_fetch_fun";
import { useRouter } from "next/navigation";

const SkillForm = ({ setUpdateForm, updateFormData }) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const [skills, setSkills] = useState(updateFormData?.skill_items || []);
  const [skillName, setSkillName] = useState("");
  const [skillPercentage, setSkillPercentage] = useState("");
  const [svg, setSvg] = useState("");
  const handleSkill = () => {
    if (IsEmpty(skillName)) {
      return ErrorToast("Fill up skill name form.");
    }
    if (IsEmpty(skillPercentage)) {
      return ErrorToast("Fill up skill Percentage form.");
    }

    const addSkill = {
      name: skillName,
      percent: skillPercentage,
    };
    skills.push(addSkill);
    setSkillName("");
    setSkillPercentage("");
  };
  const handleDelete = (i) => {
    const newArray = [];
    skills.forEach((element, index) => {
      if (index != i) {
        newArray.push(element);
      }
      setSkills(newArray);
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    const title = e.target.title.value;
    const subTitle = e.target.subtitle.value;
    const svg = e.target.svgIcon.value;
    const formData = {
      title,
      subTitle,
      svg,
      skills,
    };
    if (updateFormData) {
      client_api
        .update(`/api/dashboard/skills?id=${updateFormData?.id}`, formData)
        .then((result) => {
          if (result.status === "success") {
            setLoading(false)
            e.target.reset();
            setSkills([]);
            setSvg("");
            SuccessToast("Updated Skill.");
            setUpdateForm(false);
          }
        });
    } else {
      client_api.create("/api/dashboard/skills", formData).then((result) => {
        if (result.status === "success") {
          setLoading(false)
          e.target.reset();
          setSkills([]);
          setSvg("");
          SuccessToast("Added Skill.");
          router.push("/dashboard/skills/all-skills")
        }
      });
    }
  };
  return (
    <div>
      <div className="dashboard-form-bg flex flex-col">
        <div className="flex justify-between items-center">
          <FormTitle text={"Add Skill"} />{" "}
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
          <div className="flex gap-5 my-5 py-2 rounded text-white items-center">
            {skills?.map((item, index) => (
              <div
                key={index}
                className="flex gap-2 bg-themeColor p-2 rounded-md items-center"
              >
                <div className="underline">{item.name}</div>=
                <div>{item.percent}%</div>
                <IoMdClose
                  onClick={() => handleDelete(index)}
                  className="text-xl text-red-200 cursor-pointer bg-red-500 rounded-full"
                />
              </div>
            ))}
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-3 items-center">
            <div>
              <label htmlFor="skillName" className="dashboard-label">
                Skill Name
              </label>
              <input
                type="text"
                id="skillName"
                className="dashboard-input"
                placeholder="write Skill name"
                name="skillName"
                onChange={(e) => setSkillName(e.target.value)}
                value={skillName}
              />
            </div>
            <div>
              <label htmlFor="percentage" className="dashboard-label">
                Skill Percentage
              </label>
              <input
                type="number"
                id="percentage"
                className="dashboard-input"
                placeholder="write skill percentage"
                name="percentage"
                onChange={(e) => setSkillPercentage(e.target.value)}
                value={skillPercentage}
              />
            </div>
            <span
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border border-themeColor text-textColor hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] flex items-center gap-3 w-[100px] h-[50px] mt-5 cursor-pointer"
              onClick={handleSkill}
            >
              Add
              <IoMdAdd className="text-xl" />
            </span>
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
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
            <div>
              <label htmlFor="subtitle" className="dashboard-label">
                sub-title
              </label>
              <input
                type="text"
                id="subtitle"
                className="dashboard-input"
                placeholder="write sub title"
                name="subtitle"
                defaultValue={updateFormData?.subTitle || ""}
              />
            </div>
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
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
            <div className="dashboard-svg">{parse(svg)}</div>
          </div>

          <SubmitButton text={"Submit"} submit={loading} />
        </form>
      </div>
    </div>
  );
};

export default SkillForm;
