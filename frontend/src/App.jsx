import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { CssBaseline } from "@mui/material";
import SigninPage from "./pages/SigninPage";
import HomePage from "./pages/customer/index/index";
import AdminIndexPage from "./pages/admin/index/AdminIndexPage";
import AboutPage from "./pages/customer/About/AboutPage";
import ContactPage from "./pages/customer/Contact/ContactPage";
import Email from "./pages/Emails/ContactUs";
import "./main.css";
function App() {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminIndexPage />} />
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/email" element={<Email />} />
      </Routes>
    </Router>
  );
}

export default App;
