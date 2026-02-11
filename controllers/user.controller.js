const Registration = require("../models/user.model");

/* CREATE */
exports.createUser = async (req, res) => {
  try {
    const user = await Registration.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* GET ALL */
exports.getAllUsers = async (req, res) => {
  try {
    const users = await Registration.find();
    res.json(users);
    console.log('Retrieved all users:', users.length);
  } catch (error) {
    res.status(500).json({ message: error.message+"Error fetching users" });

  }
};

/* GET BY ID */
exports.getUserById = async (req, res) => {
  try {
    const user = await Registration.findById(req.params.id);

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
    const user = await Registration.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

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
    const user = await Registration.findOne({
      UserName: req.params.UserName
    });

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
    const user = await Registration.find({ UserName: { $regex: req.params.UserName, $options: "i" } });
    
    if (!user || user.length === 0)
      return res.status(404).json({ message: "User not found" });

    res.json(user);
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


