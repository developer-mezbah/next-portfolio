"use client";
import client_api from "@/utils/api_fetch_fun";
import { SuccessToast } from "@/utils/FormHelper";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AddImage from "../Gallery/AddImage";
import FormTitle from "../Others/FormTitle";
import SubmitButton from "../Others/SubmitButton";

const WebInformation = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [logo, setLogo] = useState(data ? data?.logo : "");
  const [footer_logo, setFooter_logo] = useState(data ? data?.footer_logo : "");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const footer_description = e.target.footer_description.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const location = e.target.location.value;
    // console.log({footer_description, phone, email, location, logo, footer_logo});
    const formData = {
      footer_description,
      phone,
      email,
      location,
      logo,
      footer_logo,
    };
    if (data) {
      client_api
        .update(`/api/dashboard/web-info?id=${data?.id}`, formData)
        .then((res) => {
          if (res?.status === "success") {
            SuccessToast("Data Uploaded!");
            e.target.reset();
            router.refresh();
            setLoading(false);
          }
        });
    } else {
      client_api.create("/api/dashboard/web-info", formData).then((res) => {
        if (res?.status === "success") {
          SuccessToast("Data Uploaded!");
          e.target.reset();
          router.refresh();
          setLoading(false);
        }
      });
    }
  };

  function generateOrderId() {
    const min = 10000000000;
    const max = 99999999999; 
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return (
    <div className="dashboard-form-bg flex flex-col">
      <FormTitle text={"Website Info"} />
      <form onSubmit={handleSubmit} className="px-10 pb-10">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="f-desc" className="dashboard-label">
              Footer Description
            </label>
            <textarea
              type="text"
              rows={5}
              id="f-desc"
              className="dashboard-input"
              placeholder="Write Footer Description"
              name="footer_description"
              defaultValue={data?.footer_description}
            />
          </div>
          <div>
            <label htmlFor="phone" className="dashboard-label">
              Contact Phone number
            </label>
            <input
              type="text"
              id="phone"
              className="dashboard-input"
              placeholder="Write Contact Phone number"
              name="phone"
              defaultValue={data?.phone}
            />
          </div>
          <div>
            <label htmlFor="email" className="dashboard-label">
              Contact Email ID
            </label>
            <input
              type="text"
              id="email"
              className="dashboard-input"
              placeholder="Input email"
              name="email"
              defaultValue={data?.email}
            />
          </div>
          <div>
            <label htmlFor="location" className="dashboard-label">
              Contact Location
            </label>
            <input
              type="text"
              id="location"
              className="dashboard-input"
              placeholder="Input location"
              name="location"
              defaultValue={data?.location}
            />
          </div>
          <div>
            <AddImage
              name={"Main LOGO"}
              setImageUrl={setLogo}
              imageUrl={logo}
              uniqueId={generateOrderId()}
            />
          </div>
          <div>
            <AddImage
              name={"Footer Logo"}
              setImageUrl={setFooter_logo}
              imageUrl={footer_logo}
              uniqueId={generateOrderId()}
            />
          </div>
        </div>
        <SubmitButton text={"Submit"} submit={loading} />
      </form>
    </div>
  );
};

export default WebInformation;
