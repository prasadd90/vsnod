const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.post("/", userController.createUser);
router.get("/", userController.getAllUsers);

router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
 
router.get("/UserName/:UserName", userController.getByName);

router.get("/contains/:UserName", userController.SearchByName);

module.exports = router;
