import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { CssBaseline } from "@mui/material";
import SigninPage from "./pages/SigninPage";

import AdminIndexPage from "./pages/admin/AdminIndexPage";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<SigninPage />} />
        <Route path="/admin" element={<AdminIndexPage />} />
      </Routes>
    </Router>
  );
}

export default App;
