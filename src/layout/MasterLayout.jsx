export const revalidate = 0;
import Navbar from "./Header/Navbar";
import Footer from "./Footer/Footer";
// import { PrismaClient } from "@prisma/client";  
import prisma from "@/utils/prisma";

async function getData() {
  try {
    // const prisma = new PrismaClient();
    const social = await prisma.Social_media.findFirst({});
    const web_info = await prisma.Web_information.findFirst({});

    return { social, web_info };
  } catch (error) {
    console.log(error);
  }
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
