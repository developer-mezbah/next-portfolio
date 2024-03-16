"use client";
import FormTitle from "../Others/FormTitle";
import SubmitButton from "../Others/SubmitButton";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { useState } from "react";
import AddImage from "../Gallery/AddImage";

const HeroForm = () => {
  const [whoami, setWhoami] = useState([]);
  const [whoamiInput, setWhoamiInput] = useState("");
  const [selectedUrl, setSelectedUrl] = useState("");

  const addWhoamiData = () => {
    if (whoamiInput.trim() !== "") {
      setWhoami((prev) => [...prev, whoamiInput]);
    }
  };
  const deleteWhoami = (index) => {
    setWhoami((prev) => prev.filter((item, i) => i !== index));
  };
  return (
    <>
      <div className="dashboard-form-bg flex flex-col">
        <FormTitle text={"Hero section"} />
        <div className="ml-10 mb-5">
          <ul className="flex gap-3">
            {whoami?.map((data, index) => (
              <li
                key={index}
                className="px-3 py-2 rounded text-white bg-themeColor flex items-center gap-2"
              >
                {data}
                <IoMdClose
                  onClick={() => deleteWhoami(index)}
                  className="text-xl text-red-200 cursor-pointer"
                />
              </li>
            ))}
          </ul>
        </div>
        <form className="px-10 pb-10">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label htmlFor="whoami" className="dashboard-label">
                Title
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  id="whoami"
                  className="dashboard-input"
                  placeholder="Who am i ?"
                  onChange={(e) => setWhoamiInput(e.target.value)}
                />
                <button
                  onClick={addWhoamiData}
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border border-themeColor text-textColor hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] flex items-center gap-3"
                  type="button"
                >
                  Add
                  <IoMdAdd className="text-xl" />
                </button>
              </div>
            </div>
            <div>
              <label htmlFor="Subtitle" className="dashboard-label">
                Subtitle
              </label>
              <input
                type="text"
                id="Subtitle"
                className="dashboard-input"
                placeholder="Linkedin Link"
              />
            </div>
            <div>
              <label htmlFor="Subtitle" className="dashboard-label">
                Subtitle
              </label>
              <input
                type="text"
                id="Subtitle"
                className="dashboard-input"
                placeholder="Github Link"
              />
            </div>
            
            <AddImage name={"Import your Image"}  setImageUrl={setSelectedUrl} imageUrl={selectedUrl}/>
            {/* <div style={{
              position: "fixed",
              background: "red",
              height: "100vh",
              width: "100vw",
              zIndex: "99999990000000000000"
            }}></div> */}
          </div>

          <SubmitButton text={"Submit"} submit={false} />
        </form>
      </div>
    </>
  );
};

export default HeroForm;
