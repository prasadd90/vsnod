const Registration = require("../models/user.model");
const service = require("../ServiceLayer/user.service");
// start  for token

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
// Secret key (store in .env in real projects)
const JWT_SECRET = "your_secret_key";

//End tokn code
/* CREATE */// req >inout res > out out 
exports.createUser = async (req, res) => {
  try {
    //const user = await Registration.create(req.body);
    const user = await service.createUser(req, res);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* GET ALL */
exports.getAllUsers = async (req, res) => {
  try {
const users = await service.getAllUsers();
    
    res.json(users);
    console.log('Retrieved all users:', users.length);
  } catch (error) {
    res.status(500).json({ message: error.message+"Error fetching users" });

  }
};

/* GET BY ID */
exports.getUserById = async (req, res) => {
  try {
    console.log('Fetching user with ID:', req.params.id);
    // const user = await Registration.findById(req.params.id);
const user = await service.getUserById(req.params.id);
    if (!user)
      return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (error) {
    res.status(400).json({ message: "Invalid ID" });
  }
};

/* UPDATE */
exports.updateUser = async (req, res) => {
  try {
    // const user = await Registration.findByIdAndUpdate(
    //   req.params.id,
    //   req.body,
    //   { new: true }
    // );

    const user = await service.updateUser(req);

    if (!user)
      return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* GET BY EXACT NAME */
exports.getByName = async (req, res) => {
  try {
    // const user = await Registration.findOne({
    //   UserName: req.params.UserName
    // });
    const user = await service.getByName(req);

    if (!user) {
      return res.status(404).json({ message: "User not available" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};



/* GET BY Name contain logic like sql server */
exports.SearchByName = async (req, res) => {
  try {
    // CONTAINS + case-insensitive
    //const user = await Registration.find({ UserName: { $regex: req.params.UserName, $options: "i" } });
    const user = await service.SearchByName(req);
    
    if (!user || user.length === 0)
      return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (error) {
    res.status(400).json({ message: "Exception"+error.message });
    
  }
};


 exports.deleteUserById = async (req, res) => {
  try {
    const user = await Registration.findByIdAndDelete(req.params.id);

    if (!user)
      return res.status(404).json({ message: "User not found" });

    res.json({ message: "User deleted successfully" });

  } catch (error) {
    res.status(400).json({ message: "Invalid ID" });
  }
};

 

exports.loginByEmailPassword = async (req, res) => {
  try {
      console.log("Login attempt for email:",  req.params.email);
      console.log("Login attempt for password:", req.params.password);  
    const user = await service.LoginByUserNameEmail( req.params.email, req.params.password);
    if(!user) {  
     
      return res.status(404).json({ message: "User not found" }); 
    }
    res.json(user);
     
  } catch (error) {
    res.status(400).json({ message: "Invalid ID" });
  }
};
exports.loginByEmailPasswordToken = async (req, res) => {
  try {
      console.log("Login attempt for email:",  req.params.email);
      console.log("Login attempt for password:", req.params.password);  
    const user = await service.LoginByUserNameEmail( req.params.email, req.params.password);
    if(!user) {  
     
      return res.status(404).json({ message: "User not found" }); 
    }
    
    res.json(user);
     
  } catch (error) {
    res.status(400).json({ message: "Invalid ID" });
  }
};
