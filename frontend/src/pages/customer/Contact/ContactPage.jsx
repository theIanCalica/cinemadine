import React, { useState } from "react";
import Navbar from "../../../components/customer/Navbar/Navbar";
import Hero from "../../../components/customer/Hero/Hero";
import "./ContactPage.scss";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
      <div className="flex justify-center my-10">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg w-full"
        >
          <input
            class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
            id="company"
            type="text"
            placeholder="Tutsplus"
          />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
          <button
            type="submit"
            className="col-span-2 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
