import React from "react";
import Navbar from "../../../components/admin/Navbar/Navbar";
import Sidebar from "../../../components/admin/Sidebar/Sidebar";
import Widget from "../../../components/admin/Widgets/Widget";
import "./index.scss";
const AdminIndexPage = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget />
          <Widget />
          <Widget />
          <Widget />
        </div>
        Container
      </div>
    </div>
  );
};

export default AdminIndexPage;
