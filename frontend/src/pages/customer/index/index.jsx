import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Navbar from "../../../components/customer/Navbar/Navbar";
import Footer from "../../../components/customer/Footer/Footer";
const index = () => {
  return (
    <div className="home">
      <div className="homeContainer">
        <Navbar />
        <div className="h-screen">
          <img
            src="/images/dp.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
