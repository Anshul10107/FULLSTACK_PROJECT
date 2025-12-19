const Client = require("../models/client");

exports.addClient = async (req, res) => {
  const client = await Client.create({
    image: req.file.path,
    name: req.body.name,
    description: req.body.description,
    designation: req.body.designation
  });
  res.status(201).json(client);
};

exports.getClients = async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
};
