import express from "express"; 
import sql from "../database/sql";

const router = express.Router();
router.get('/', async function(req, res, next) {

  const students = await sql.getStudents()
  console.log(students);
  res.render('students', { 
    title: '사용자 목록', 
    students
  }); 
});

module.exports = router;