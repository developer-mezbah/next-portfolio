import React from "react";
import Navbar from "./Header/Navbar";
import Footer from "./Footer/Footer";

const MasterLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div style={{marginTop: "100px"}}>{children}</div>
      <Footer />
    </div>
  );
};

export default MasterLayout;
