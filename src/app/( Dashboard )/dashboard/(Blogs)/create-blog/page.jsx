"use client"
import FormTitle from "@/DasComponent/Others/FormTitle";
import PageTitle from "@/DasComponent/Others/PageTitle";
import Editor from "@/utils/Editor";
import React, { useState } from "react";

const page = () => {
  const [editorData, setEditorData] = useState("");
  const inputClass =
    "border text-sm rounded-lg block w-full p-2.5 bg-bgDark border-themeColor placeholder-gray-400 text-white focus:ring-themeColor focus:border-themeColor";
  const lableClass = "block mb-2 text-sm font-medium text-white";
  return (
    <div>
      <PageTitle text={"Create and update Blog"} />
      <div>
        <div className="dashboard-form-bg flex flex-col">
          <FormTitle text={"Create Blog"} />
          <form className="px-10 pb-10">
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label htmlFor="qualificationtitle" className={lableClass}>
                  Qualification title
                </label>
                <input
                  type="text"
                  id="qualificationtitle"
                  className={inputClass}
                  placeholder="input title"
                />
              </div>
              <div>
                <label
                  htmlFor="qualificationInstittuename"
                  className={lableClass}
                >
                  Institute Name
                </label>
                <input
                  type="text"
                  id="qualificationInstittuename"
                  className={inputClass}
                  placeholder="Institute name"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-textColor">Description Content Edit</label>
              <div className="flex gap-3 pb-[60px]">
                <Editor data={editorData} onDataChange={setEditorData} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
