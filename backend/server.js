require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const articleRoutes = require("./routes/articles");
// express app
const app = express();

// Middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.listen(process.env.PORT, () => {
  console.log("listening on port", process.env.PORT);
});

// Routes
app.use("/api/articles", articleRoutes);
