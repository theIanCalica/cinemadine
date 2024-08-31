import React from "react";
import Navbar from "../../../components/customer/Navbar/Navbar";
import Hero from "../../../components/customer/Hero/Hero";
import "./AboutPage.scss";
const AboutPage = () => {
  return (
    <div className="container">
      <Navbar />
      <Hero />

      <hr class="broken-hr"></hr>
    </div>
  );
};

export default AboutPage;
