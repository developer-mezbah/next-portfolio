"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";
import SubmitButton from "../Others/SubmitButton";

const ProjectCategoryForm = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "Do You want to add Project Category.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Submit",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        const value = e.target.projectCategory.value;
        const options = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(value),
        };
        let res = await fetch("/api/dashboard/projects/category", options);
        let resJson = await res.json();
        if (resJson.status === "success") {
          setLoading(false);
          e.target.reset();
          Swal.fire({
            title: "Added Category!",
            text: "Project Category has been uploaded.",
            icon: "success",
          });
          router.refresh();
        }
      }
    });
  };
  return (
    <div className="mt-10">
      <div className="w-1/2">
        <select
          defaultValue="DEFAULT"
          id="projects-categories"
          className="dashboard-input"
        >
          <option value="DEFAULT" disabled>
            All project Categories
          </option>
          {data?.map((data) => (
            <option key={data.id} value={data.id}>
              {data.cat_name}
            </option>
          ))}
        </select>
      </div>
      <div className="dashboard-form-bg p-5 mt-10">
        <form onSubmit={handleSubmit}>
          <label htmlFor="projectCategory" className="dashboard-label">
            Add Project Category
          </label>
          <div className="w-1/2 flex gap-5">
            <input
              name="projectCategory"
              id="projectCategory"
              type="text"
              className="dashboard-input"
            />
            <div>
              <SubmitButton text={"Submit"} submit={loading} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectCategoryForm;
