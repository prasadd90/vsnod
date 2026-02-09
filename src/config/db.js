const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/MyDB";
    await mongoose.connect(mongoURI);

    if (mongoose.connection.readyState === 1) {
      console.log("MongoDB is connected - Ready State: " + mongoose.connection.readyState);
    } else {
      console.log("MongoDB is NOT connected");
    }
  } catch (error) {
    console.error("MongoDB connection failed", error);
    process.exit(1);
  }
};

module.exports = connectDB;
