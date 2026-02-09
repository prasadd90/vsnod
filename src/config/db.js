const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const mongoURI = "mongodb+srv://deshmukhprasad573_db_user:Oo6X5pKKXtXLLZAp@cluster0.critjdp.mongodb.net";
    //mongodb://localhost:27017/MyDB
    //await mongoose.connect(mongoURI);
await mongoose.connect(process.env.MONGO_URI || mongoURI)
    if (mongoose.connection.readyState === 1) {
      console.log("MongoDB is connected - Ready State: " + mongoose.connection.readyState);
       console.log("MongoDB is connected - Ready State: " + process.env.MONGO_URI);
    } else {
      console.log("MongoDB is NOT connected");
    }
  } catch (error) {
    console.error("MongoDB connection failed", error);
    process.exit(1);
  }
};

module.exports = connectDB;
