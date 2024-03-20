import { createTheme } from "react-data-table-component";
export const qualificationData = [
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

export const customTableStyles = {
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
