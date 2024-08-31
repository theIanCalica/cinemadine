const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: {
    type: String,
    required: "Name is required!",
    trim: true,
    maxlength: 255,
  },
});
