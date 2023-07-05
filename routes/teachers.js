const express = require('express');
const passport = require('passport');

const router = express.Router();
// console.log('router loaded');
const homeController = require('../controllers/home_controller');

const teacherController = require('../controllers/teacher_controller');

router.get("/dashboard", teacherController.dashboard); //Delete this

router.get("/allotsubject", teacherController.allotsubject);
router.get("/getsubject/:id", teacherController.getsubject);
router.get("/attendance_view/:id", teacherController.attendance_view);
router.get("/attendance_update/:id", teacherController.attendance_update);
router.get("/viewstudentattendance/:id", teacherController.viewstudentattendance);
router.get("/internalmarks/:id", teacherController.internalmarkspage);
router.get("/attendaceedit/:id", teacherController.attendaceedit);
router.get('/searchstudent/:id', teacherController.searchstudent);
router.post("/addattendance", teacherController.addattendance);
router.post("/change_attendance", teacherController.change_attendance);
router.post("/updateMarks", teacherController.updateMarks);
router.get("/notes/:id", teacherController.viewnotes);
router.get("/search/:registration", teacherController.profile);

router.get("/viewstudentattendance", teacherController.viewstudentattendance);

module.exports = router;