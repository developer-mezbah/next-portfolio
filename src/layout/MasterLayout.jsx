import React from "react";
import Navbar from "./Header/Navbar";
import Footer from "./Footer/Footer";

const MasterLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MasterLayout;
