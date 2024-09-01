require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

// Include routes
const articleRoutes = require("./routes/articles");
const ContactRoutes = require("./routes/Contacts");
const GenreRoutes = require("./routes/Genre");
// express app
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/articles", articleRoutes);
app.use("/api/contacts", ContactRoutes);
app.use("/api/genres", GenreRoutes);

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
