"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";
import SubmitButton from "../Others/SubmitButton";

const AddCategory = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "Do You want to add Gallery image Category.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Submit",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        const value = e.target.galleryCat.value;
        const options = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(value),
        };
        let res = await fetch("/api/dashboard/gallery/category", options);
        let resJson = await res.json();
        if (resJson.status === "success") {
          setLoading(false);
          e.target.reset();
          Swal.fire({
            title: "Added Category!",
            text: "Your file has been uploaded.",
            icon: "success",
          });
          router.refresh()
        }
      }
    });
  };
  return (
    <div className="dashboard-form-bg p-5 mt-10">
      <form onSubmit={handleSubmit}>
        <label htmlFor="gategory" className="dashboard-label">
          Add Gallery Category
        </label>
        <div className="w-1/2 flex gap-5">
          <input
            name="galleryCat"
            id="gategory"
            type="text"
            className="dashboard-input"
          />
          <div>
            <SubmitButton text={"Submit"} submit={loading} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCategory;
