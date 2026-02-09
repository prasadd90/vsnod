const express = require("express");
require("dotenv").config();

const connectDB = require("./src/config/db.js");
const userRoutes = require("./routes/user.routes.js");

const app = express();

/* Middleware */
app.use(express.json());

/* Health Check Endpoint */
app.get("/api/health", (req, res) => {
  res.json({ status: "API is running", timestamp: new Date() });
});

/* Routes */
app.use("/api/users", userRoutes);

/* Start Server */
connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
