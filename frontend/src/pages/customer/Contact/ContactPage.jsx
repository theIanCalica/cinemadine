import React from "react";
import Navbar from "../../../components/customer/Navbar/Navbar";
import Hero from "../../../components/customer/Hero/Hero";
import "./ContactPage.scss";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import axios from "axios";
const ContactPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, touchedFields },
  } = useForm();

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/contacts",
        data
      );
      if (response.status === 201) {
        // Typically, a successful POST request returns a 201 status code
        console.log("Form Data Submitted Successfully:", response.data);
        alert("Message sent successfully!");
      } else {
        console.error("Form submission error:", response);
        alert("There was an error submitting the form.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting the form.");
    }
  };

  // Utility function to determine input border color
  const getBorderColor = (fieldName) => {
    if (errors[fieldName]) {
      return "border-red-500";
    } else if (touchedFields[fieldName]) {
      return "border-green-500";
    }
    return "border-gray-200";
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
      <DevTool control={control} />
      <div className="flex justify-center my-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl w-full"
        >
          <div className="w-full mb-3">
            <input
              className={`w-full bg-gray-200 text-black border rounded py-3 px-4 ${getBorderColor(
                "name"
              )}`}
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="w-full mb-3">
            <input
              className={`w-full bg-gray-200 text-black border rounded py-3 px-4 ${getBorderColor(
                "email"
              )}`}
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="w-full mb-3">
            <input
              className={`w-full bg-gray-200 text-black border rounded py-3 px-4 ${getBorderColor(
                "phone"
              )}`}
              id="phone"
              name="phone"
              type="text"
              maxLength={11}
              placeholder="Phone Number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^(09\d{9})$/,
                  message:
                    "Invalid phone number. Must start with 09 and contain 11 digits",
                },
              })}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="w-full mb-3">
            <input
              className={`w-full bg-gray-200 text-black border rounded py-3 px-4 ${getBorderColor(
                "subject"
              )}`}
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject"
              {...register("subject", { required: "Subject is required" })}
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>

          <div className="w-full mb-3 col-span-2">
            <textarea
              name="body"
              id="body"
              rows={5}
              className={`w-full bg-gray-200 text-black border rounded py-3 px-4 ${getBorderColor(
                "body"
              )}`}
              placeholder="Comment"
              {...register("body", { required: "Comment is required" })}
            ></textarea>
            {errors.body && (
              <p className="text-red-500 text-sm mt-1">{errors.body.message}</p>
            )}
          </div>

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
