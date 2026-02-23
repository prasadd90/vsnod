 
const Registration = require("../models/user.model");

/* CREATE */
exports.createUser = async (req, res) => {
  try {
    const user = await Registration.create(req.body);
       return user;
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* GET ALL */
exports.getAllUsers = async (req, res) => {
  try {
    const users = await Registration.find();
     return (users);
    console.log('Retrieved all users:', users.length);
  } catch (error) {
    res.status(500).json({ message: error.message+"Error fetching users" });

  }
};

/* GET BY ID */
exports.getUserById = async (id) => {
  try {
    const user = await Registration.findById(id);

    if (!user)
      throw new Error("User not found");

    return user;
  } catch (error) {
    res.status(400).json({ message: "Invalid ID" });
  }
};

/* UPDATE */
exports.updateUser = async (req) => {
  try {
    const user = await Registration.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!user)
      throw new Error("User not found");

    return user;
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* GET BY EXACT NAME */
exports.getByName = async (req) => {
  try {
    const user = await Registration.findOne({
      UserName: req.params.UserName
    });

    if (!user) {
      throw new Error("User not available");
    }

    return user;
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};




/* GET BY Name contain logic like sql server */
exports.SearchByName = async (req) => {
  try {
    // CONTAINS + case-insensitive
    console.log("Searching for users with name containing:", req.params.UserName);
    const user = await Registration.find({ UserName: { $regex: req.params.UserName, $options: "i" } });
    
    

    return user;
  } catch (error) {
    res.status(400).json({ message: error.message });
    
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

exports.LoginByUserNameEmail = async (Email,Password) => {
  try {
     console.log("Login attempt for email:",  Email);
      console.log("Login attempt for password:", Password);
 
  
    const user = await Registration.findOne({
      Email: Email,
      Password: Password
    });
    console.log("Login attempt for email:", user.Email);

    if (!user) {
       return null;
    }
 return user;

  } catch (error) {
     console.error("Login error:", error);
     return null;
   
  }
};
