import React, { useState } from "react";
import Navbar from "../../../components/customer/Navbar/Navbar";
import Hero from "../../../components/customer/Hero/Hero";
import "./ContactPage.scss";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    body: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <div className="container">
      <Navbar />
      <Hero type="Contact" />
      <hr className="broken-hr" />
      <div className="flex justify-center items-center flex-col mt-40">
        <p className="text-gray-500 font-serif">Contact With Us</p>
        <h1 className="text-4xl font-bold font-sans">
          Feel Free to Write us Anytime
        </h1>
      </div>

      {/* End of hero  */}
      {/* Contact us form */}
      <div className="flex justify-center my-10">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl w-full"
        >
          <input
            className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
            id="phone"
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
            id="phone"
            name="phone"
            type="tel"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            name="body"
            id="body"
            className=""
            placeholder="Comment"
            value={formData.body}
            onChange={handleChange}
          ></textarea>
          <div className="col-span-2 flex justify-center">
            <button
              type="submit"
              className="w-full bg-themeYellow text-white py-2 px-4 rounded-md hover:bg-white hover:text-themeYellow hover:border-themeYellow transition-colors duration-300 ease-in-out"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
