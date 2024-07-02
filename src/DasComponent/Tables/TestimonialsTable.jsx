"use client";
import { DeleteAlert } from "@/utils/DeleteAlert";
import { SuccessToast } from "@/utils/FormHelper";
import { customTableStyles } from "@/utils/TableData";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { FaTrashCan } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import TestimonialForm from "../Forms/TestimonialForm";

const TestimonialsTable = ({ data }) => {
  const router = useRouter();
  const [loader, setLoader] = useState(true);
  const [updateForm, setUpdateForm] = useState(false);
  const [updateFormData, setUpdateFormData] = useState({});
  useEffect(() => {
    setLoader(false);
  }, []);

  const handleDelete = (id) => {
    DeleteAlert(`/api/dashboard/testimonial?id=${id}`).then((res) => {
      if (res) {
        router.refresh();
        SuccessToast("Deleted Data!");
      }
    });
  };

  const handleUpdate = (data) => {
    setUpdateForm(true);
    setUpdateFormData(data);
  };

  const columns = [
    {
      name: "Images",
      selector: (row) => (
        <Image
          className="rounded w-20 h-20 p-3"
          width={100}
          height={100}
          src={row?.img}
          alt={row?.name}
        />
      ),
    },
    {
      name: "Name",
      selector: (row) => row?.name,
    },
    {
      name: "Title",
      selector: (row) => row?.title,
    },
    {
      name: "Description",
      selector: (row) => row?.description.slice(0, 50),
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
          <DataTable
            title={"Qulification Lists"}
            columns={columns}
            data={data}
            theme="solarized"
            customStyles={customTableStyles}
          />
        </div>
      ) : (
        <TestimonialForm
          data={updateFormData}
          setUpdateForm={setUpdateForm}
          name={"Update"}
        />
      )}
    </section>
  );
};

export default TestimonialsTable;
