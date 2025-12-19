const express = require("express");
const uploadAndCrop = require("../middleware/upload");
const { addClient, getClients } = require("../controllers/clientController");

const router = express.Router();

router.post("/", uploadAndCrop("image"), addClient);
router.get("/", getClients);

module.exports = router;
