import React from "react";
import Navbar from "../../../components/admin/Navbar/Navbar";
import Sidebar from "../../../components/admin/Sidebar/Sidebar";
import "./index.scss";
const AdminIndexPage = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        Container
      </div>
    </div>
  );
};

export default AdminIndexPage;
