const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.post("/", userController.createUser);
router.get("/", userController.getAllUsers);

router.get("/:id", userController.getUserById);//http://localhost:3000/api/users/64b8c9e5f1a2c3d4e5f67890
router.put("/:id", userController.updateUser);
 
router.get("/UserName/:UserName", userController.getByName);

router.get("/contains/:UserName", userController.SearchByName);
router.delete("/delete/:id", userController.deleteUserById);

router.get("/email/:email/password/:password", userController.loginByEmailPassword);

module.exports = router;

