import React from "react";
import "./index.scss";
import Navbar from "../../../components/customer/Navbar/Navbar";
import Footer from "../../../components/customer/Footer/Footer";
const index = () => {
  return (
    <div className="home">
      <div className="homeContainer">
        <Navbar />
      </div>
    </div>
  );
};

export default index;
