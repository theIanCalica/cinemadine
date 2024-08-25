require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const articleRoutes = require("./routes/articles");
// express app
const app = express();

// Routes
app.use("/api/articles", articleRoutes);

mongoose
  .connect(process.env.MONG_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
// Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
