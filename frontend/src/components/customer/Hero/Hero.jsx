import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <div>
        <img
          src="/images/about.jpg"
          alt=""
          style={{ height: "600px" }}
          className=" w-screen object-cover"
        />
        <div class="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 mb-40 flex flex-col items-center justify-center text-center">
          <p className="text-white">Home &gt; About</p>
          <h1 className="text-5xl font-bold font-sans text-white mt-4">
            About
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
