import React, { useState } from "react";
import Navbar from "../../../components/customer/Navbar/Navbar";
import Hero from "../../../components/customer/Hero/Hero";
import "./ContactPage.scss";
import { useForm } from "react-hook-form";

const ContactPage = () => {
  const form = useForm();
  const { register } = form;
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
            {...register("name")}
          />
          <input
            className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            {...register("email")}
          />
          <input
            className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
            id="phone"
            name="phone"
            type="text"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            {...register("phone")}
          />
          <input
            className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
            id="subject"
            name="subject"
            type="text"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            {...register("subject")}
          />
          <textarea
            name="body"
            id="body"
            rows={5}
            className="w-full col-span-2 bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
            placeholder="Comment"
            value={formData.body}
            onChange={handleChange}
            {...register("body")}
          ></textarea>
          <div className="col-span-2 flex justify-center">
            <button
              type="submit"
              className="w-60 h-14 bg-themeYellow text-white border border-transparent hover:bg-white hover:text-themeYellow hover:border-themeYellow transition-colors duration-300 ease-in-out"
            >
              Send a Message
            </button>
          </div>
        </form>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default ContactPage;
