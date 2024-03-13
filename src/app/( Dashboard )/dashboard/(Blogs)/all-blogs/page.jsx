"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import { FaTrashCan } from "react-icons/fa6";

const data = [
  {
    name: "Beetlejuice",
    email: "developer.mezbah@gmail.com",
    id: 1,
    createAt: "01/ 01/ 2024",
    DeleteID: 10,
  },
  {
    name: "Mezbah Uddin",
    email: "mk6449248@gmail.com",
    id: 2,
    createAt: "01/ 01/ 2024",
    DeleteID: 10,
  },
];
createTheme(
  "solarized",
  {
    text: {
      primary: "#268bd2",
      secondary: "#2aa198",
    },
    background: {
      default: "#111C43",
    },
    context: {
      background: "#cb4b16",
      text: "#FFFFFF",
    },
    divider: {
      default: "#073642",
    },
    action: {
      button: "rgba(0,0,0,.54)",
      hover: "rgba(0,0,0,.08)",
      disabled: "rgba(0,0,0,.12)",
    },
  },
  "dark"
);

const customStyles = {
  rows: {
    style: {
      minHeight: "72px", // override the row height
    },
  },
  headCells: {
    style: {
      color: "#7E5BE2",
      fontSize: "16px",
    },
  },
  cells: {
    style: {
      color: "#A3AED1",
    },
  },
};
const page = () => {
  // solved Hydration failed
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setLoader(false);
  }, []);
  if (loader) {
    return <div>Loading</div>;
  }

  const columns = [
    {
      name: "Name",
      selector: (row) => row?.name,
    },
    {
      name: "Email",
      selector: (row) => row?.email,
    },
    {
      name: "View Message",
      selector: (row) => (
        <div className=" cursor-pointer	bg-purple-50 text-purple-600 px-[10px] py-0 rounded-full">
          <Link href={`/dashboard/inbox/details/${row?.id}`}>View</Link>
        </div>
      ),
    },
    {
      name: "Date",
      selector: (row) => row?.createAt.substring(0, 10),
    },

    {
      name: "Action",
      selector: (row) => (
        <div className="p-2 cursor-pointer text-red-400">
          <FaTrashCan onClick={() => DeleteMessage(row?.DeleteID)} />
        </div>
      ),
    },
  ];
  return (
    <section className="p-10">
      <DataTable
        columns={columns}
        data={data}
        pagination
        theme="solarized"
        customStyles={customStyles}
      />
    </section>
  );
};

export default page;
