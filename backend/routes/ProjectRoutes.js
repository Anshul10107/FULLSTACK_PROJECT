const express = require("express");
const uploadAndCrop = require("../middleware/upload");
const {
  addProject,
  getProjects
} = require("../controllers/projectController");

const router = express.Router();

router.post("/", uploadAndCrop("image"), addProject);
router.get("/", getProjects);

module.exports = router;
