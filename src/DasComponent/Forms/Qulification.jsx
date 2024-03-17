import { useState } from "react";
import FormTitle from "../Others/FormTitle";
import SubmitButton from "../Others/SubmitButton";
import AddImage from "../Gallery/AddImage";

const Qulification = () => {
  const [img, setImg] = useState("")
  const inputClass =
    "border text-sm rounded-lg block w-full p-2.5 bg-bgDark border-themeColor placeholder-gray-400 text-white focus:ring-themeColor focus:border-themeColor";
  const lableClass =
    "block mb-2 text-sm font-medium text-white";
  return (
    <>
      <div className="dashboard-form-bg flex flex-col">
        <FormTitle text={"Qualification"} />
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
            <div>
              <label htmlFor="date" className={lableClass}>
                Date
              </label>
              <input
                type="text"
                id="date"
                className={inputClass}
                placeholder="Input data when start your course."
              />
            </div>
            <AddImage name={"Import your Image"}  setImageUrl={setImg} imageUrl={img}/>
          </div>
          <SubmitButton text={"Add"} submit={false} />
        </form>
      </div>
    </>
  );
};

export default Qulification;
