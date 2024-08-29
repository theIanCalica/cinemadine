import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay"; // This import can be removed if you're including Autoplay in the module imports

import { Navigation, Scrollbar, A11y, Autoplay } from "swiper/modules";

import Navbar from "../../../components/customer/Navbar/Navbar";
import Footer from "../../../components/customer/Footer/Footer";

const Index = () => {
  return (
    <div className="home">
      <div className="homeContainer">
        <Navbar />
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          modules={[Navigation, Scrollbar, A11y, Autoplay]}
          // autoplay={{
          //   delay: 5000, // Time between slides in ms
          //   disableOnInteraction: false, // Continue autoplay after user interactions
          // }}
          loop={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="h-screen w-screen"
        >
          <SwiperSlide className="text-center">
            <img
              src="/images/dp.webp"
              alt=""
              className="h-screen w-screen object-cover"
            />
            <div className="absolute top-80 left-44 z-10">
              <p className="text-themeYellow font-shadows-light font-bold text-4xl">
                Action Movie
              </p>
              <h1
                className="text-white font-bold text-7xl text-left mb-4 font-sans  hover:text-themeYellow"
                style={{ transition: "color 0.3s ease-in-out", width: "500px" }}
              >
                Deadpool & Wolverine
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="text-center">
            <img
              src="/images/IO.jpg"
              alt=""
              className="h-screen w-screen object-cover"
            />
          </SwiperSlide>
          <SwiperSlide className="text-center">
            <img
              src="/images/min.jpg"
              alt=""
              className="h-screen w-screen object-cover"
            />
          </SwiperSlide>
          <SwiperSlide className="text-center">
            <img
              src="/images/q.jpg"
              alt=""
              className="h-screen w-screen object-cover"
            />
          </SwiperSlide>
        </Swiper>
        {/* 
        <div className="h-screen">
           
        </div> */}
      </div>
    </div>
  );
};

export default Index;
