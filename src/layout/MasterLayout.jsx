import React from "react";
import Navbar from "./Header/Navbar";
import Footer from "./Footer/Footer";
import { PrismaClient } from "@prisma/client";

async function getData() {
  const prisma = new PrismaClient()
  const social = await prisma.Social_media.findFirst({});
  return {social}
}


const MasterLayout = async ({ children }) => {
  const {social} = await getData()
  return (
    <div>
      <Navbar />
      <div className="main" style={{marginTop: "100px"}}>{children}</div>
      <Footer social={social}/>
    </div>
  );
};

export default MasterLayout;
