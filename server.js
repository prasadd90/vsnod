const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./src/config/db.js");
const userRoutes = require("./routes/user.routes.js");

const app = express();
// Enable CORS for all routes
/* CORS Configuration */
const corsOptions = {
   
   origin: "*",
  credentials: false,
  optionsSuccessStatus: 200,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(cors(corsOptions));
//end core

/* Middleware */
app.use(express.json());
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
