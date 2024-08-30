const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the schema or attributes of a model
const categorySchema = new Schema(
  {
    _id: {
      type: Number,
      required: true,
      unique: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
      trim: true, // Removes extra spaces from the beginning and end of the string
      maxlength: 100, // Optional: Limits the length of the name
    },
  },
  {
    timestamps: true, // Adds `createdAt` and `updatedAt` fields automatically
  }
);

// Add indexes if needed
categorySchema.index({ name: 1 }); // Index for searching by name

// Create the model
const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
