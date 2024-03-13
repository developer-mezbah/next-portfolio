import React from "react";
import Navbar from "@/DasComponent/Navbar/Navbar";
import Footer from "@/DasComponent/Others/Footer";
import "react-quill/dist/quill.snow.css";
import "./dashboard.css";
import NextTopLoader from "nextjs-toploader";

export default function Layout({ children }) {
  return (
    <>
      {" "}
      <NextTopLoader
        color="#5D57C9"
        height={2}
        speed={200}
        showSpinner={false}
      />
      <div className="flex">
        <div className="bg-bgDark min-h-screen">
          <Navbar />
        </div>
        <div className="w-full mt-[65px]">
          <div className="bg-[url('/images/dashboard-bg.jpg')] bg-fixed bg-center bg-no-repeat bg-cover min-h-[86vh]">
            <div className="p-5 pr-10">{children}</div>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
