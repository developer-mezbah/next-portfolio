"use client";
import Navbar from "@/DasComponent/Navbar/Navbar";
import Footer from "@/DasComponent/Others/Footer";
import "react-quill/dist/quill.snow.css";
import "./dashboard.css";
import NextTopLoader from "nextjs-toploader";
import GalleryProvider from "@/DasComponent/Gallery/GalleryProvider";
import { useGalleryModel } from "@/_zustand/store";

export default function Layout({ children }) {
  const { IsSmallNavbar } = useGalleryModel();
  return (
    <>
      <NextTopLoader
        color="#5D57C9"
        height={2}
        speed={200}
        showSpinner={false}
      />
      <div className="flex">
        <div className="bg-bgDark min-h-screen fixed">
          <Navbar />
        </div>
        <div
          className={`w-full mt-[65px] ${
            IsSmallNavbar ? "ml-[80px]" : "ml-[250px]"
          }`}
        >
          <div className="bg-[url('/images/dashboard-bg.jpg')] bg-fixed bg-center bg-no-repeat bg-cover min-h-[86vh]">
            <div className="p-5 pr-10">{children}</div>
            <div>
              <GalleryProvider />
            </div>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
