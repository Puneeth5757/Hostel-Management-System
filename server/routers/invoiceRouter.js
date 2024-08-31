const express = require('express');
const router = express.Router();
const invoicedb = require('../models/invoicesSchema');

// Get all notices (Read)
router.get('/Admin-invoices', async (req, res) => {
  try {
    const notices = await invoicedb.find();
    res.status(200).json(notices);
  } catch (error) {
    console.error('Error fetching notices:', error);
    res.status(500).json({ message: 'Error fetching notices' });
  }
});

// Create a new notice (Create)
router.post('/Admin-invoices', async (req, res) => {
  const { title, description } = req.body;
  try {
    const newNotice = new invoicedb({ title, description });
    const savedNotice = await newNotice.save();
    res.status(201).json(savedNotice);
  } catch (error) {
    console.error('Error adding notice:', error);
    res.status(400).json({ message: 'Error adding notice' });
  }
});

// Delete a notice (Delete)
router.delete('/Admin-invoices/:noticeId', async (req, res) => {
  const noticeId = req.params.noticeId;
  try {
    const deletedNotice = await invoicedb.findByIdAndDelete(noticeId);
    if (!deletedNotice) {
      return res.status(404).json({ message: 'Notice not found' });
    }
    res.status(200).json({ message: 'Notice deleted successfully' });
  } catch (error) {
    console.error('Error deleting notice:', error);
    res.status(500).json({ message: 'Error deleting notice' });
  }
});

module.exports = router;
