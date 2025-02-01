"use client";
import { ErrorToast, SuccessToast } from "@/utils/FormHelper";
import client_api from "@/utils/api_fetch_fun";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import AddImage from "../Gallery/AddImage";
import FormTitle from "../Others/FormTitle";
import SubmitButton from "../Others/SubmitButton";

const HeroForm = () => {
  const [loading, setLoading] = useState(false);
  const [whoami, setWhoami] = useState([]);
  const [whoamiInput, setWhoamiInput] = useState("");
  const [selectedUrl, setSelectedUrl] = useState("");
  const router = useRouter();
  const addWhoamiData = () => {
    if (whoamiInput.trim() !== "") {
      if (whoami.length < 4) {
        setWhoami((prev) => [...prev, whoamiInput]);
      } else {
        ErrorToast("Maximum able to add 4 items!");
      }
    }
  };
  const deleteWhoami = (index) => {
    setWhoami((prev) => prev.filter((item, i) => i !== index));
  };

  const [inputData, setInputData] = useState({
    subtitle: "",
    description: "",
    heroId: "",
  });

  const handleInputChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    client_api.get("/api/dashboard/hero").then((res) => {
      if (!!res.data !== false) {
        setInputData({
          ...inputData,
          subtitle: res.data.subtitle,
          description: res.data.description,
          heroId: res.data.id,
        });
        setSelectedUrl(res.data.img);

        const newWhoami = [];
        if (res.data?.title1 !== "") {
          newWhoami.push(res.data?.title1);
        }
        if (res.data?.title2 !== "") {
          newWhoami.push(res.data?.title2);
        }
        if (res.data?.title3 !== "") {
          newWhoami.push(res.data?.title3);
        }
        if (res.data?.title4 !== "") {
          newWhoami.push(res.data?.title4);
        }
        setWhoami(newWhoami);
        // setWhoami([
        //   res.data?.title1,
        //   res.data?.title2,
        //   res.data?.title3,
        //   res.data?.title4,
        // ]);
      } else {
        client_api.create("/api/dashboard/hero", {
          title1: "",
          title2: "",
          title3: "",
          title4: "",
          subtitle: "",
          description: "",
          img: "",
        });
      }
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const title1 = whoami[0];
    const title2 = whoami[1];
    const title3 = whoami[2];
    const title4 = whoami[3];
    const img = selectedUrl;
    client_api
      .update(`/api/dashboard/hero?id=${inputData.heroId}`, {
        title1: title1 || "",
        title2: title2 || "",
        title3: title3 || "",
        title4: title4 || "",
        img,
        subtitle: inputData.subtitle,
        description: inputData.description,
      })
      .then((res) => {
        if (res.status == "success") {
          setLoading(false);
          SuccessToast("Updated Data!");
          router.refresh();
        }
      });
  };

  function generateOrderId() {
    const min = 10000000000;
    const max = 99999999999; 
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return (
    <>
      <div className="dashboard-form-bg flex flex-col">
        <FormTitle text={"Hero section"} />
        <div className="ml-10 mb-5">
          <ul className="flex gap-3">
            {whoami?.map(
              (data, index) =>
                data !== "" && (
                  <li
                    key={index}
                    className="px-3 py-2 rounded text-white bg-themeColor flex items-center gap-2"
                  >
                    {`${index + 1}. ${data}`}
                    <IoMdClose
                      onClick={() => deleteWhoami(index)}
                      className="text-xl text-red-200 cursor-pointer"
                    />
                  </li>
                )
            )}
          </ul>
        </div>
        <form onSubmit={handleSubmit} className="px-10 pb-10">
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
                placeholder="Subtitle"
                name="subtitle"
                value={inputData.subtitle}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="hero-description" className="dashboard-label">
                Description
              </label>
              <input
                type="text"
                id="hero-description"
                className="dashboard-input"
                placeholder="Description"
                name="description"
                value={inputData.description}
                onChange={handleInputChange}
              />
            </div>

            <AddImage
              name={"Hero Image ( 522 * 478 )"}
              setImageUrl={setSelectedUrl}
              imageUrl={selectedUrl}
              uniqueId={generateOrderId()}
            />
          </div>

          <SubmitButton text={"Submit"} submit={loading} />
        </form>
      </div>
    </>
  );
};

export default HeroForm;
