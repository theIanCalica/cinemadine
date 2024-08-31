import React from "react";
import Navbar from "../../../components/customer/Navbar/Navbar";
import Hero from "../../../components/customer/Hero/Hero";
import "./ContactPage.scss";

const ContactPage = () => {
  return (
    <div className="container">
      <Navbar />
      <Hero type="Contact" />
      <hr class="broken-hr"></hr>
      <div></div>
    </div>
  );
};

export default ContactPage;
