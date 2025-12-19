const Project = require("../models/project");

exports.addProject = async (req, res) => {
  const project = await Project.create({
    image: req.file.path,
    name: req.body.name,
    description: req.body.description
  });
  res.status(201).json(project);
};

exports.getProjects = async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
};
