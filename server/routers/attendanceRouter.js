// routes/attendance.js
const express = require('express');
const router = express.Router();
const attendancedb = require("../models/attendanceSchema")
const userdb = require("../models/userSchema");

  // to retrieve all users
  router.get("/users", async (req, res) => {
    try {
      const users = await userdb.find({});
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// to mark attendance
router.post('/attendances', async (req, res) => {
  const { studentId, status } = req.body;
  try {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const existingAttendance = await attendancedb.findOne({
      studentId,
      date: { $gte: startOfDay, $lte: endOfDay },
    });

    if (existingAttendance) {
      return res.status(400).json({ message: 'Attendance already marked for today' });
    }

    //if no record exists for today
    const attendance = new attendancedb({ studentId, status, date: new Date() });
    await attendance.save();

    const user = await userdb.findById(studentId);
    res.status(201).json({ attendance, studentName: user.fname });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get attendance for a student
router.get('/attendances/:studentId', async (req, res) => {
  const { studentId } = req.params;

  try {
    const attendanceRecords = await attendancedb.find({ studentId }).sort({ date: -1 });
    res.status(200).json(attendanceRecords);
  } catch (error) {
    console.error('Error fetching attendance records:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
