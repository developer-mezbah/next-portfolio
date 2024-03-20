"use client";
import { DeleteAlert } from "@/utils/DeleteAlert";
import Qualification from "./Qulification";
import { SuccessToast } from "@/utils/FormHelper";
import { customTableStyles, qualificationData } from "@/utils/TableData";
import client_api from "@/utils/api_fetch_fun";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import { FaTrashCan } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";

const QualificationTable = ({ data }) => {
  const router = useRouter();
  const [loader, setLoader] = useState(true);
  const [updateForm, setUpdateForm] = useState(false);
  const [updateFormData, setUpdateFormData] = useState({});
  const [formData, setFormData] = useState();
  useEffect(() => {
    setLoader(false);
  }, []);

  const handleDelete = (id) => {
    DeleteAlert(`/api/qualification?id=${id}`).then((res) => {
      if (res) {
        router.refresh()
        SuccessToast("Deleted Data!");
        if (formData) {
          setFormData((prev) => prev.filter((item) => item.id !== id));
        }
      }
    });
  };

  const handleUpdate = (data) => {
    setUpdateForm(true);
    setUpdateFormData(data);
  };

  const roleBasedFilter = (role) => {
    const rolefilterData = data.filter((single) => single.role === role);
    if (role === "DEFAULT") {
      setFormData(data);
    } else {
      setFormData(rolefilterData);
    }
  };
  const columns = [
    {
      name: "Title",
      selector: (row) => row?.title,
    },
    {
      name: "Institute Name",
      selector: (row) => row?.institute_name,
    },
    {
      name: "Session",
      selector: (row) => row?.session,
    },
    {
      name: "Role",
      selector: (row) => row?.role,
    },

    {
      name: "Action",
      selector: (row) => (
        <div className="p-2 cursor-pointer flex gap-5 text-xl">
          <FaTrashCan
            className=" text-red-400"
            onClick={() => handleDelete(row?.id)}
          />
          <FiEdit onClick={() => handleUpdate(row)} />
        </div>
      ),
    },
  ];
  if (loader) {
    return <div>Loading...</div>;
  }
  return (
    <section className="p-5">
      {!updateForm ? (
        <div>
          <div className="w-1/5 float-right">
            <select
              defaultValue="DEFAULT"
              id="gallery-categories"
              className="dashboard-input"
              onChange={(e) => roleBasedFilter(e.target.value)}
            >
              <option value="DEFAULT">All</option>
              <option value="Education">Education</option>
              <option value="Work">Work</option>
            </select>
          </div>
          <DataTable
            title={"Qulification Lists"}
            columns={columns}
            data={formData || data}
            theme="solarized"
            customStyles={customTableStyles}
          />
        </div>
      ) : (
        <Qualification
          data={updateFormData}
          setUpdateForm={setUpdateForm}
          name={"Update"}
        />
      )}
    </section>
  );
};

export default QualificationTable;
