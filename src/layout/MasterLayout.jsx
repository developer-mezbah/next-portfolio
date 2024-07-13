import Navbar from "./Header/Navbar";
import Footer from "./Footer/Footer";
import prisma from "@/utils/prisma";
import { cache } from "react";

const getData = cache(async () => {
  try {
    const socialFetch = prisma.Social_media.findFirst({});
    const web_infoFetch = prisma.Web_information.findFirst({});

    const [social, web_info] = await Promise.all([socialFetch, web_infoFetch]);
    return { social, web_info };
  } catch (error) {
    console.log(error);
  }
});

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
