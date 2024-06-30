"use client";
import { DeleteAlert } from "@/utils/DeleteAlert";
import { ErrorToast, SuccessToast } from "@/utils/FormHelper";
import { customTableStyles } from "@/utils/TableData";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { FaTrashCan } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import Qualification from "../Forms/Qulification";
import Image from "next/image";
import { IoIosCloseCircleOutline } from "react-icons/io";
import BlogsForm from "../Forms/BlogsForm";
import Link from "next/link";
import { MdPreview } from "react-icons/md";

const BlogsTable = ({ data }) => {
  const router = useRouter();
  const [loader, setLoader] = useState(true);
  const [updateForm, setUpdateForm] = useState(false);
  const [updateFormData, setUpdateFormData] = useState({});
  const [tableData, setTableData] = useState();
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    setLoader(false);
    setTableData(data);
  }, []);
  const dateFormat = (data) => {
    const date = new Date(data);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");
    return `${day}-${month}-${year}`;
  };
  const handleDelete = (id) => {
    DeleteAlert(`/api/dashboard/blogs?id=${id}`).then((res) => {
      if (res) {
        router.refresh();
        SuccessToast("Deleted Data!");
        setTableData(tableData.filter((prev) => prev.id !== id));
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
      name: "Image",
      selector: (row) => (
        <div>
          <Image
            width={100}
            height={100}
            className="w-20 h-20 rounded m-2"
            alt={row?.title}
            src={row?.img}
          />
        </div>
      ),
    },
    {
      name: "Title",
      selector: (row) => row?.title,
      sortable: true,
    },
    {
      name: "Created At",
      selector: (row) => dateFormat(row?.createAt),
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <div className="p-2 cursor-pointer flex gap-5 text-2xl">
          <FaTrashCan
            className=" text-red-400"
            onClick={() => handleDelete(row?.id)}
          />
          <FiEdit
            onClick={() => {
              handleUpdate(row);
              setTableData("");
            }}
          />
          <Link
            href={
              `/blogs/${row?.title
                .replace(/[^a-zA-Z0-9-.\s]/g, "")
                .replace(/ /g, "-")}?id=${row?.id}` || "#"
            }
          >
            <MdPreview />
          </Link>
        </div>
      ),
    },
  ];
  if (loader) {
    return <div>Loading...</div>;
  }

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    if (searchInput.length > 2) {
      const result = tableData.filter((prev) =>
        prev.title.includes(searchInput)
      );
      setTableData(result);
    } else {
      setTableData(data);
    }
  };
  return !updateForm ? (
    <section className="p-5 relative">
      <div>
        <div className="absolute top-10 z-50 right-10 flex items-center gap-2">
          <input
            className="dashboard-input"
            type="text"
            onChange={handleSearch}
            value={searchInput}
            placeholder="Search..."
          />
          <span
            onClick={() => {
              setSearchInput("");
              setTableData(data);
            }}
            className="text-5xl text-themeColor cursor-pointer"
          >
            <IoIosCloseCircleOutline />
          </span>
        </div>
        <DataTable
          title={"Blogs List"}
          columns={columns}
          data={tableData || data}
          theme="solarized"
          customStyles={customTableStyles}
          pagination
        />
      </div>
    </section>
  ) : (
    <BlogsForm
      name={"Update Blog"}
      data={updateFormData}
      setUpdateForm={setUpdateForm}
    />
  );
};

export default BlogsTable;
