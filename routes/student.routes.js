const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student.controller");

router.post("/", studentController.createStudent);
router.get("/", studentController.getAllStudents);

router.get("/:id", studentController.getStudentById);//http://localhost:3000/api/users/64b8c9e5f1a2c3d4e5f67890
router.put("/:id", studentController.updateStudent);
 
router.get("/studentname/:studentname", studentController.getByName);

router.get("/contains/:studentname", studentController.SearchByName);
router.delete("/student/delete/:id", studentController.deleteStudentById);
module.exports = router;