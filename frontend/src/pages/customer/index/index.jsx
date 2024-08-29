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
            <div className="absolute top-60 left-44 z-10">
              <p className="text-themeYellow font-shadows-light font-bold text-4xl">
                Action Movie
              </p>
              <h1
                className="text-white font-bold text-8xl text-left mb-4 font-mono  hover:text-themeYellow"
                style={{ transition: "color 0.3s ease-in-out", width: "550px" }}
              >
                Deadpool & Wolverine
              </h1>
              <p className="text-white text-left text-lg font-sans  ">
                Written and Directed by Ian Calica / Phillipines 2024
              </p>
            </div>
            <div className="flex justify-between items-center absolute bottom-36 left-44">
              <button
                className="bg-white mr-10 text-black px-12 py-3 text-lg  font-mono hover:bg-themeYellow hover:text-white"
                style={{
                  transition:
                    "color 0.3s ease-in-out, background-color 0.3s ease-in-out",
                }}
              >
                More Info
              </button>

              <button
                className="bg-themeYellow text-white px-12 py-4 font-mono hover:bg-white hover:text-black text-sm"
                style={{
                  transition:
                    "color 0.3s ease-in-out, background-color 0.3s ease-in-out",
                }}
              >
                Buy Ticket
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="text-center">
            <img
              src="/images/IO.jpg"
              alt=""
              className="h-screen w-screen object-cover"
            />
            <div className="absolute top-60 right-44 z-10">
              <p className="text-themeYellow font-shadows-light font-bold text-4xl">
                Children's Film
              </p>
              <h1
                className="text-white font-bold text-8xl text-left mb-4 font-mono  hover:text-themeYellow"
                style={{ transition: "color 0.3s ease-in-out", width: "550px" }}
              >
                Inside Out Part 2
              </h1>
              <p className="text-white text-left text-lg font-sans  ">
                Written and Directed by Ian Calica / Phillipines 2024
              </p>
            </div>
            <div className="flex justify-between items-center absolute bottom-36 right-80">
              <button
                className="bg-white mr-10 text-black px-12 py-3 text-lg  font-mono hover:bg-themeYellow hover:text-white"
                style={{
                  transition:
                    "color 0.3s ease-in-out, background-color 0.3s ease-in-out",
                }}
              >
                More Info
              </button>

              <button
                className="bg-themeYellow text-white px-12 py-4 font-mono hover:bg-white hover:text-black text-sm"
                style={{
                  transition:
                    "color 0.3s ease-in-out, background-color 0.3s ease-in-out",
                }}
              >
                Buy Ticket
              </button>
            </div>
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
