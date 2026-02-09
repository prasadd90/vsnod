 const mongoose = require("mongoose");

const Registration = new mongoose.Schema(
{
  UserName: { type: String, required: true,unique: true  },

  MobileNo: { type: String, required: true },

  AdharCardNo: { type: String },

  Email: { type: String, required: true },

  Password: { type: String, required: true },

  CommercialBusinessUserId: { type: Number },

  NonCommercialUserId: { type: Number },

  Education: { type: String },

  Address: { type: String },

  City_Village: { type: String },

  DeviceName: { type: String },
   DeviceName1: { type: String },

  ApplicationStatus: { type: String }
},
{
  timestamps: true // adds createdAt & updatedAt
});

module.exports = mongoose.model("Registration", Registration);