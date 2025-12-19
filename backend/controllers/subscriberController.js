const Subscriber = require("../models/Subscriber");

exports.subscribe = async (req, res) => {
  const sub = await Subscriber.create({ email: req.body.email });
  res.status(201).json(sub);
};

exports.getSubscribers = async (req, res) => {
  const subs = await Subscriber.find();
  res.json(subs);
};
