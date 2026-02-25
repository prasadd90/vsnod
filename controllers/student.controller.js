const Registration = require("../models/student.model");
const service = require("../ServiceLayer/student.service");
/* CREATE */
exports.createStudent = async (req, res) => {
  try {
    //const Student = await Registration.create(req.body);
    const Student = await service.createStudent(req, res);
    res.status(201).json(Student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* GET ALL */
exports.getAllStudents = async (req, res) => {
  try {
const Students = await service.getAllStudents();
    
    res.json(Students);
    console.log('Retrieved all Students:', Students.length);
  } catch (error) {
    res.status(500).json({ message: error.message+"Error fetching Students" });

  }
};

/* GET BY ID */
exports.getStudentById = async (req, res) => {
  try {
    console.log('Fetching Student with ID:', req.params.id);
    // const Student = await Registration.findById(req.params.id);
const Student = await service.getStudentById(req.params.id);
    if (!Student)
      return res.status(404).json({ message: "Student not found" });

    res.json(Student);
  } catch (error) {
    res.status(400).json({ message: "Invalid ID" });
  }
};

/* UPDATE */
exports.updateStudent = async (req, res) => {
  try {
    // const Student = await Registration.findByIdAndUpdate(
    //   req.params.id,
    //   req.body,
    //   { new: true }
    // );

    const Student = await service.updateStudent(req);

    if (!Student)
      return res.status(404).json({ message: "Student not found" });

    res.json(Student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* GET BY EXACT NAME */
exports.getByName = async (req, res) => {
  try {
    // const Student = await Registration.findOne({
    //   StudentName: req.params.StudentName
    // });
    console.log("Searching for Student with name:", req.params.studentname);
    const Student = await service.getByName(req);

    if (!Student) {
      return res.status(404).json({ message: "Student not available" });
    }
    
    res.json(Student);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong "+error });
  }
};



/* GET BY Name contain logic like sql server */
exports.SearchByName = async (req, res) => {
  try {
    // CONTAINS + case-insensitive
    //const Student = await Registration.find({ StudentName: { $regex: req.params.StudentName, $options: "i" } });
    const Student = await service.SearchByName(req);
    
    if (!Student || Student.length === 0)
      return res.status(404).json({ message: "Student not found" });

    res.json(Student);
  } catch (error) {
    res.status(400).json({ message: "Exception"+error.message });
    
  }
};


 exports.deleteStudentById = async (req, res) => {
  try {
    const Student = await Registration.findByIdAndDelete(req.params.id);

    if (!Student)
      return res.status(404).json({ message: "Student not found" });

    res.json({ message: "Student deleted successfully" });

  } catch (error) {
    res.status(400).json({ message: "Invalid ID" });
  }
};

 

exports.loginByEmailPassword = async (req, res) => {
  try {
      console.log("Login attempt for email:",  req.params.email);
      console.log("Login attempt for password:", req.params.password);  
    const Student = await service.LoginByStudentNameEmail( req.params.email, req.params.password);
    if(!Student) {  
     
      return res.status(404).json({ message: "Student not found" }); 
    }
    res.json(Student);
     
  } catch (error) {
    res.status(400).json({ message: "Invalid ID" });
  }
};
