require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const projectRoutes = require("./routes/ProjectRoutes");
const clientRoutes = require("./routes/clientRoutes");
const contactRoutes = require("./routes/contactRoutes");
const subscriberRoutes = require("./routes/subscriberRoutes");

const app = express();

/* Connect Database */
connectDB();

/* Middlewares */
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

/* Routes */
app.use("/api/projects", projectRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/subscribe", subscriberRoutes);

/* Health Check */
app.get("/", (req, res) => {
  res.send("Backend is running");
});

/* Start Server */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
