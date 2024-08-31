const express = require('express');
const router = express.Router();
const Complaintdb = require('../models/complaintSchema');

// to register complaints
router.post('/complaints', async (req, res) => {
  const { complaintType, complaintTitle, complaintDescription } = req.body;
  try {
    const newComplaint = new Complaintdb({
      complaintType,
      complaintTitle,
      complaintDescription,
    });
    await newComplaint.save();
    res.status(201).json({ message: 'Complaint registered successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering complaint' });
  }
});

// to fetch the complaints
router.get('/Admin-complaints', async (req, res) => {
  try {
    const complaints = await Complaintdb.find();
    res.status(200).json(complaints);
  } catch (error) {
    console.error('Error fetching complaints:', error);
    res.status(500).json({ message: 'Error fetching complaints' }); 
  }
});

module.exports = router;
