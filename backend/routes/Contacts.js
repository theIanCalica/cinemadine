const express = require("express");
const router = express.Router();
const Contact = require("../Models/Contact");

// Get all contacts
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
