export const revalidate = 0;
import React from "react";
import Navbar from "./Header/Navbar";
import Footer from "./Footer/Footer";
import { PrismaClient } from "@prisma/client";

async function getData() {
  const prisma = new PrismaClient();
  const social = await prisma.Social_media.findFirst({});
  const web_info = await prisma.Web_information.findFirst({});

  return { social, web_info };
}

const MasterLayout = async ({ children }) => {
  const data = await getData();
  return (
    <div>
      <Navbar data={data?.web_info} />
      <div className="main" style={{ marginTop: "100px" }}>
        {children}
      </div>
      <Footer social={data?.social} data={data?.web_info} />
    </div>
  );
};

export default MasterLayout;
