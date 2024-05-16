"use client";
import { DeleteAlert } from "@/utils/DeleteAlert";
import { SuccessToast } from "@/utils/FormHelper";
import { customTableStyles } from "@/utils/TableData";
import client_api from "@/utils/api_fetch_fun";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { FaTrashCan } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import SkillForm from "../Forms/SkillForm";

const SkillsTable = () => {
  const [loader, setLoader] = useState(true);
  const [updateFormData, setUpdateFormData] = useState({});
  const [updateForm, setUpdateForm] = useState(false);
  const [data, setData] = useState([])
  useEffect(() => {
    client_api.get("/api/dashboard/skills").then(result => {
        setData(result.data)
    })
    setLoader(false);
  }, [updateForm]);
  if (loader) {
    return <div>Loading...</div>;
  }

  const columns = [
    {
      name: "Title",
      selector: (row) => row?.title,
    },
    {
      name: "Sub Title",
      selector: (row) => row?.subTitle,
    },
    {
      name: "Action",
      selector: (row) => (
        <div className="p-2 cursor-pointer flex gap-5 text-xl">
          <FaTrashCan
            className=" text-red-400"
            onClick={() => {
              DeleteAlert(`/api/dashboard/skills?id=${row.id}`).then(
                (result) => {
                  if (result) {
                    SuccessToast("Deleted This Item.");
                    const filterData = data.filter(item => item.id !== row.id)
                    setData(filterData)
                  }
                }
              );
            }}
          />
          <FiEdit
            onClick={() => {
                setUpdateForm(true)
                setUpdateFormData(row)
            }}
          />
        </div>
      ),
    },
  ];
  return (
    <div>
      <section className="p-5 relative">
        <div>
          {!updateForm ? (
            <DataTable
              title={"Skills List"}
              columns={columns}
              data={data}
              theme="solarized"
              customStyles={customTableStyles}
            />
          ) : (
            <SkillForm updateFormData={updateFormData} setUpdateForm={setUpdateForm}/>
          )}
        </div>
      </section>
    </div>
  );
};

export default SkillsTable;
