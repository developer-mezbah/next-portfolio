import Navbar from "./Header/Navbar";
import Footer from "./Footer/Footer";
import { socialPromise, web_infoPromise } from "@/utils/fetchData";

const MasterLayout = async ({ children }) => {
  const [social, web_info ] = await Promise.all([socialPromise, web_infoPromise])
  return (
    <div>
      <Navbar data={web_info} />
      <div className="main" style={{ marginTop: "100px" }}>
        {children}
      </div>
      <Footer social={social} data={web_info} />
    </div>
  );
};

export default MasterLayout;
