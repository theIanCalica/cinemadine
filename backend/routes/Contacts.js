const express = require("express");
const router = express.Router();
const Contact = require("../Models/Contact");

// Get all contacts
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    console.log(contacts);
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Add Contact
router.post("/", async (req, res) => {
  const { name, email, phone, subject, body } = req.body;
  try {
    const newContact = new Contact({
      name,
      email,
      phone,
      subject,
      body,
    });

    const saveContact = await newContact.save();
    res.status(201).json(saveContact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Get a single contact by ID
router.get("/:id", async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({ msg: "Contact not found" });
    }

    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Update a contact by ID
router.put("/:id", async (req, res) => {
  const { name, email, phone, subject, body } = req.body;

  try {
    // Find and update the contact
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { name, email, phone, subject, body },
      { new: true } // Return the updated document
    );

    if (!contact) {
      return res.status(404).json({ msg: "Contact not found" });
    }

    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Delete a contact by ID
router.delete("/:id", async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({ msg: "Contact not found" });
    }

    res.json({ msg: "Contact deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
