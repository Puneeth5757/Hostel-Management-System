const express = require('express');
const router = express.Router();
const messdb = require('../models/messSchema');

// Get all menus
router.get('/Admin-mess', async (req, res) => {
  try {
    const menus = await messdb.find();
    res.json(menus);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new menu
router.post('/Admin-mess', async (req, res) => {
  const menu = new messdb({
    day: req.body.day,
    breakfast: req.body.breakfast,
    lunch: req.body.lunch,
    dinner: req.body.dinner,
    price: req.body.price,
  });

  try {
    const newMenu = await menu.save();
    res.status(201).json(newMenu);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a menu
router.patch('/Admin-mess/:id', async (req, res) => {
  try {
    const menu = await messdb.findById(req.params.id);
    if (req.body.day != null) {
      menu.day = req.body.day;
    }
    if (req.body.breakfast != null) {
      menu.breakfast = req.body.breakfast;
    }
    if (req.body.lunch != null) {
      menu.lunch = req.body.lunch;
    }
    if (req.body.dinner != null) {
      menu.dinner = req.body.dinner;
    }
    if (req.body.price != null) {
      menu.price = req.body.price;
    }

    const updatedMenu = await menu.save();
    res.json(updatedMenu);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
