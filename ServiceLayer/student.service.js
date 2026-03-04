 
const student_model = require("../models/student.model");

/* CREATE */
exports.createStudent = async (req, res) => {
  try {
    const Student = await student_model.create(req.body);
       return Student;
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* GET ALL */
exports.getAllStudents = async (req, res) => {
  try {
    
    const Students = await student_model.find().find()
  .sort({ _id: -1 });
     return (Students);
    console.log('Retrieved all Students:', Students.length);
  } catch (error) {
    res.status(500).json({ message: error.message+"Error fetching Students" });

  }
};

/* GET BY ID */
exports.getStudentById = async (id) => {
  try {
    const Student = await student_model.findById(id);

    if (!Student)
      throw new Error("Student not found");

    return Student;
  } catch (error) {
    res.status(400).json({ message: "Invalid ID" });
  }
};

/* UPDATE */
exports.updateStudent = async (req) => {
  try {
    const Student = await student_model.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!Student)
      throw new Error("Student not found");

    return Student;
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* GET BY EXACT NAME */
exports.getByName = async (req) => {
  try {
    console.log("Searching for Student with name:", req.params.studentname);
    const sname = req.params.studentname;
    const Student = await student_model.findOne({
      StudentName: sname
    });
console.log("Found Student:", Student);
    if (Student==null) {
       return null;
    }

    return Student;
  } catch (error) {
    res.status(500).json({ message: "Something went wrong"+error });
  }
};




/* GET BY Name contain logic like sql server */
exports.SearchByName = async (req) => {
  try {
    // CONTAINS + case-insensitive
    console.log("Searching for Students with name containing:", req.params.StudentName);
    const Student = await student_model.find({ StudentName: { $regex: req.params.StudentName, $options: "i" } });
    
    

    return Student;
  } catch (error) {
    res.status(400).json({ message: error.message });
    
  }
};


 exports.deleteStudentById = async (req, res) => {
  try {
     
      console.log("Delete function called with ID:", req.params.id);
    const Student = await student_model.findByIdAndDelete(req.params.id);

    if (!Student)
      return res.status(404).json({ message: "Student not found" });

    res.json({ message: "Student deleted successfully" });

  } catch (error) {
    res.status(400).json({ message: "Invalid ID" });
  }
};
// http://localhost:3000/api/Students/email/nitin@gmail.com/password/password123
exports.LoginByStudentNameEmail = async (Email,Password) => {
  try {
     console.log("Login attempt for email:",  Email);
      console.log("Login attempt for password:", Password);
 
  
    const Student = await student_model.findOne({
      Email: Email,
      Password: Password
    });
    console.log("Login attempt for email:", Student.Email);

    if (!Student) {
       return null;
    }
 return Student;

  } catch (error) {
     console.error("Login error:", error);
     return null;
   
  }
};
