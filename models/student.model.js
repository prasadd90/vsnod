 const mongoose = require("mongoose");

const Student = new mongoose.Schema(
{
  StudentName: { type: String, required: true,unique: true  },

  MobileNo: { type: String, required: true },

  AdharCardNo: { type: String },

  Email: { type: String, required: true },

  Education: { type: String },

  Address: { type: String },

  City_Village: { type: String },

  DeviceName: { type: String },
   DeviceName1: { type: String },

   
},
{
  timestamps: true // adds createdAt & updatedAt
});

module.exports = mongoose.model("Student", Student);