"use client";
import { useEffect, useState } from "react";
import FormTitle from "../Others/FormTitle";
import SubmitButton from "../Others/SubmitButton";
import AddImage from "../Gallery/AddImage";
import client_api from "@/utils/api_fetch_fun";
import { ErrorToast, IsEmpty, SuccessToast } from "@/utils/FormHelper";
import { useRouter } from "next/navigation";
import Editor from "@/utils/Editor";
import { IoIosCloseCircleOutline, IoMdAdd, IoMdClose } from "react-icons/io";

const ProjectsForm = ({ name, data, setUpdateForm, categories }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [keyFeatures, setKeyFeatures] = useState(data?.key_feature || []);
  const [forDeveloper, setForDeveloper] = useState(data?.for_developer || []);
  const [img, setImg] = useState(data?.banner_img || "");
  const [longimg, setLongimg] = useState(data?.long_img || "");
  const [editorData, setEditorData] = useState(data?.description || "");
  const [formData, setFormData] = useState({
    title: data?.title || "",
    price: data?.price || "",
    code_url: data?.code_url || "",
    preview_url: data?.preview_url || "",
    type: data?.type || "",
    categoryId: data?.categoryId || "",
    keywords: data?.keywords || "",
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //validation data
    if (
      IsEmpty(formData.title) ||
      IsEmpty(img) ||
      IsEmpty(longimg) ||
      IsEmpty(editorData)
    ) {
      return ErrorToast(
        "Some fields are empty. Please complete all required fields.!"
      );
    }
    setLoading(true);
    if (data) {
      const updateAbleForDeveloper = [];
      forDeveloper.forEach((element) => {
        updateAbleForDeveloper.push(element.title);
      });
      const updateAbleKeyFeatures = [];
      keyFeatures.forEach((element) => {
        updateAbleKeyFeatures.push(element.title);
      });
      client_api
        .update(`/api/dashboard/projects/update-project?id=${data.id}`, {
          ...formData,
          description: editorData,
          banner_img: img,
          long_img: longimg,
          for_developers: updateAbleForDeveloper,
          key_features: updateAbleKeyFeatures,
        })
        .then((res) => {
          if (res.status == "success") {
            setImg("");
            setLongimg("");
            SuccessToast("Data Updated!");
            setUpdateForm(false);
            setLoading(false);
            router.refresh();
          } else {
            ErrorToast("Something went wrong!");
            setLoading(false);
          }
        });
    } else {
      client_api
        .create("/api/dashboard/projects/create", {
          ...formData,
          description: editorData,
          banner_img: img,
          long_img: longimg,
          for_developers: forDeveloper,
          key_features: keyFeatures,
        })
        .then((res) => {
          if (res.status == "success") {
            SuccessToast("Data Added");
            setImg("");
            setLongimg("");
            router.push("/dashboard/projects/all-projects");
            router.refresh();
            setLoading(false);
          } else {
            ErrorToast("Something went wrong!");
            setLoading(false);
          }
        });
    }
  };

  const [keyFeaturesInput, setKeyFeaturesInput] = useState("");

  const deleteKeyFeature = (index) => {
    setKeyFeatures((prev) => prev.filter((item, i) => i !== index));
  };

  const addkeyfeature = () => {
    if (data) {
      if (keyFeaturesInput.trim() !== "") {
        setKeyFeatures((prev) => [...prev, { title: keyFeaturesInput }]);
        setKeyFeaturesInput("");
      }
    } else {
      if (keyFeaturesInput.trim() !== "") {
        setKeyFeatures((prev) => [...prev, keyFeaturesInput]);
        setKeyFeaturesInput("");
      }
    }
  };

  const [developerInput, setdeveloperInput] = useState("");

  const deleteForDeveloper = (index) => {
    setForDeveloper((prev) => prev.filter((item, i) => i !== index));
  };

  const addforDeveloper = () => {
    if (data) {
      if (developerInput.trim() !== "") {
        setForDeveloper((prev) => [...prev, { title: developerInput }]);
        setdeveloperInput("");
      }
    } else {
      if (developerInput.trim() !== "") {
        setForDeveloper((prev) => [...prev, developerInput]);
        setdeveloperInput("");
      }
    }
  };

  useEffect(() => {
    if (!data) {
      setLongimg("");
      setImg("");
    }
  }, []);
  return (
    <>
      <div className="dashboard-form-bg flex flex-col">
      <div className="flex items-center justify-between">
          <FormTitle text={name || "Update"} />
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
              <label htmlFor="title" className="dashboard-label">
                Project title
              </label>
              <input
                type="text"
                id="title"
                className="dashboard-input"
                placeholder="write title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="price" className="dashboard-label">
                Price
              </label>
              <input
                type="text"
                id="price"
                className="dashboard-input"
                placeholder="Write price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="code_url" className="dashboard-label">
                code url
              </label>
              <input
                type="text"
                id="date"
                className="dashboard-input"
                placeholder="Paste code_url"
                name="code_url"
                value={formData.code_url}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="preview_url" className="dashboard-label">
                preview url
              </label>
              <input
                type="text"
                id="preview_url"
                className="dashboard-input"
                placeholder="Paste preview_url"
                name="preview_url"
                value={formData.preview_url}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="dashboard-label" htmlFor="type">
                Project Type
              </label>
              <input
                type="text"
                id="type"
                className="dashboard-input"
                placeholder="For slider"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="dashboard-label" htmlFor="keywords">
                keywords
              </label>
              <textarea
                rows={4}
                type="text"
                id="keywords"
                className="dashboard-input"
                placeholder="Write keywords"
                name="keywords"
                value={formData.keywords}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <select
                defaultValue={formData?.categoryId || "DEFAULT"}
                id="gallery-categories"
                className="dashboard-input"
                onChange={handleInputChange}
                name="categoryId"
              >
                <option value={formData?.categoryId || "DEFAULT"} disabled>
                  Choose a Project Category
                </option>
                {categories?.map((data) => (
                  <option key={data.id} value={data.id}>
                    {data.cat_name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <AddImage
                name={"Banner Image"}
                setImageUrl={setImg}
                imageUrl={img}
              />
            </div>
            <div>
              <AddImage
                name={"Long Or Scroll Image"}
                setImageUrl={setLongimg}
                imageUrl={longimg}
              />
            </div>
            <div className="">
              <div className="flex gap-2">
                <input
                  type="text"
                  id="whoami"
                  className="dashboard-input"
                  placeholder="Add Key features"
                  onChange={(e) => setKeyFeaturesInput(e.target.value)}
                  value={keyFeaturesInput}
                />
                <button
                  onClick={addkeyfeature}
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border border-themeColor text-textColor hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] flex items-center gap-3"
                  type="button"
                >
                  Add
                  <IoMdAdd className="text-xl" />
                </button>
              </div>
              <ul className="flex gap-3 py-5 flex-wrap">
                {data
                  ? keyFeatures?.map(
                      (item, index) =>
                        item !== "" && (
                          <li
                            key={index}
                            className="px-3 py-2 rounded text-white bg-themeColor flex items-center gap-2"
                          >
                            {`${index + 1}. ${item.title}`}
                            <IoMdClose
                              onClick={() => deleteKeyFeature(index)}
                              className="text-xl text-red-200 cursor-pointer"
                            />
                          </li>
                        )
                    )
                  : keyFeatures?.map(
                      (item, index) =>
                        item !== "" && (
                          <li
                            key={index}
                            className="px-3 py-2 rounded text-white bg-themeColor flex items-center gap-2"
                          >
                            {`${index + 1}. ${item}`}
                            <IoMdClose
                              onClick={() => deleteKeyFeature(index)}
                              className="text-xl text-red-200 cursor-pointer"
                            />
                          </li>
                        )
                    )}
              </ul>
            </div>

            <div className="">
              <div className="flex gap-2">
                <input
                  type="text"
                  id="whoami"
                  className="dashboard-input"
                  placeholder="Add features for Developer"
                  onChange={(e) => setdeveloperInput(e.target.value)}
                  value={developerInput}
                />
                <button
                  onClick={addforDeveloper}
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border border-themeColor text-textColor hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] flex items-center gap-3"
                  type="button"
                >
                  Add
                  <IoMdAdd className="text-xl" />
                </button>
              </div>
              <ul className="flex gap-3 py-5 flex-wrap">
                {data
                  ? forDeveloper?.map(
                      (data, index) =>
                        data !== "" && (
                          <li
                            key={index}
                            className="px-3 py-2 rounded text-white bg-themeColor flex items-center gap-2"
                          >
                            {`${index + 1}. ${data.title}`}
                            <IoMdClose
                              onClick={() => deleteForDeveloper(index)}
                              className="text-xl text-red-200 cursor-pointer"
                            />
                          </li>
                        )
                    )
                  : forDeveloper?.map(
                      (data, index) =>
                        data !== "" && (
                          <li
                            key={index}
                            className="px-3 py-2 rounded text-white bg-themeColor flex items-center gap-2"
                          >
                            {`${index + 1}. ${data}`}
                            <IoMdClose
                              onClick={() => deleteForDeveloper(index)}
                              className="text-xl text-red-200 cursor-pointer"
                            />
                          </li>
                        )
                    )}
              </ul>
            </div>
            <div>
              <Editor data={editorData} onDataChange={setEditorData} />
            </div>
          </div>
          <SubmitButton text={"Add"} submit={loading} />
        </form>
      </div>
    </>
  );
};

export default ProjectsForm;
