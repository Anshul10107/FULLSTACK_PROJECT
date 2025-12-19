const Contact = require("../models/contact");

exports.addContact = async (req, res) => {
  const contact = await Contact.create(req.body);
  res.status(201).json(contact);
};

exports.getContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
};
